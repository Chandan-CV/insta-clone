import { Avatar, Button } from '@material-ui/core'
import React,{useState,useContext} from 'react'
import { db } from './firebase';
import Context from './MainContext';
import './Post.css'
function Post({userName , imageUrl, caption, id}) {
    const {user} = useContext(Context);
    const [commment, setComment]= useState([]);
    db.collection("Posts").doc(id).collection("Comments").onSnapshot((snapshot)=>{
        snapshot.docs.map((lol)=>{
           com : lol.data();
        })
    })
   

    return (
        <div className= "post">
       <div className="postHeader">
       {/* avatar */}
       
       <Avatar className="PostAvatar"
       alt={userName}
       
       />
       <h3>{userName}</h3>
       {/* image */ }
       </div>
       
       <img 
    className="postImage"
    src={imageUrl}
    alt=""
    />

    {/* username+caption */}

    <h4 className = "postText"> <strong> {userName}</strong> {caption}</h4>


    {/* this is the comments section */}
    <div className="comments">
    <input placeholder="enter your comment" />   
    <Button>send</Button>  
     <h5>{JSON.stringify(commment)}</h5>
    </div>
    
    </div>
    )
}


export default Post
