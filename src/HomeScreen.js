import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Post from "./Post";
import { auth, db, storage } from "./firebase";
import { Link, Redirect } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import Context from "./MainContext";
import firebase from "firebase";
import "./ImageUpload.css"



function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(Context);
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    // this is where the code runs
    db.collection("Posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      //this is run everytime it runs
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  const logout = () => {
    auth.signOut().catch((err) => {
      alert(err.message);
    });
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if(image){

    
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("Posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              userName: user.displayName,
            });
            setCaption("");
            setProgress(0);
            setImage(null);
          });
      }
    );
    }
    else{
      alert("please select an image")
    }
  };

 
  

  return (
    <div className="app">
    <div className="appHeader">
    <img
    className="app_headerImage"
    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
    alt=""
    />
    
    <h1>{user ? user.displayName : ""}</h1>
    {user ? (
      <Button variant="contained" onClick={logout}>
      logout
      </Button>
      ) : (
        <Link to="/login" className="LoginLink">
        <Button variant="contained">Login</Button>
        </Link>
        )}
        </div>
        
        <div className="appBody">
        {user?.displayName ?  
          <div className="UPD">
          <progress className="progressBar" value={progress} max="100" />
    
          <input
            placeholder="enter the caption"
            value={caption}
            onChange={(cap) => {
              setCaption(cap.target.value);
            }}
          />
    
          <input
            type="file"
            onChange={(e) => {
              handleChange(e);
            }}
          />
    
          {/*send button and its functions */}
          <Button onClick={handleUpload}>Upload</Button>
        </div>
        
        : <h1>login to upload</h1>}
       
        {posts.map(({ id, post }) => {
          return (
            <Post
              key={id}
              userName={post.userName}
              caption={post.caption}
              imageUrl={post.imageUrl}
              id ={id}
              />
          );
        })}
        </div>  
      
    </div>
  );
}

export default HomeScreen;
