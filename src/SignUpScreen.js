import { Button, Input, TextField } from "@material-ui/core";
import { Link, Redirect,useHistory,Route } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./LoginScreen.css";

function SignUpScreen() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setCpass] = useState("");
  const [userName, setUserName] = useState("");
   const history = useHistory();
  const signup = () => {
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCred)=>{
        if (userCred.user){
          userCred.user.updateProfile({displayName:userName})
          .then(()=>{
            console.log(userCred.user.displayName)
          history.push("/")
          })
        }

      })
      .catch((err) => {
        alert(err.message);
      })
  };

 
  return (
    <div className="MainLoginDiv">
      <div className="lol">
        <from className="form">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" />
          <div className="inputDiv">
            <Input
              className="TF"
              placeholder="email"
              type="email"
              value={email}
              onChange={(text) => {
                setemail(text.target.value);
              }}
            />
            <Input
              className="TF"
              placeholder="Username"
              type="text"
              value={userName}
              onChange={(text) => {
                setUserName(text.target.value);
              }}
            />
            <Input
              className="TF"
              placeholder="password"
              type="password"
              value={pass}
              onChange={(text) => {
                setpass(text.target.value);
              }}
            />
            <Input
              className="TF"
              placeholder=" confirm password"
              type="password"
              value={cpass}
              onChange={(text) => {
                setCpass(text.target.value);
              }}
            />
          </div>

          <Button onClick={signup}>Sign UP</Button>
        </from>
      </div>
    </div>
  );
}

export default SignUpScreen;
