import { Button, Input,TextField } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom';
import React,{useState} from 'react'
import {auth} from './firebase'
import './LoginScreen.css'

function LoginScreen() {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")

  const login =()=>{
  auth.signInWithEmailAndPassword(email,pass).catch((err)=>{alert(err.message)})
  }
  return (
    <div className="MainLoginDiv">
    
    <div className="lol">

    <from className="form" onSubmit={()=>{alert("form submitted")}}>
    <img
    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
    />
    <div className="inputDiv">
    <Input
    className="TF"
    placeholder="email"
    type="email"
    value={email}
    onChange={(text)=>{setemail(text.target.value)}}
    
    />   
    
    <Input
    className="TF"
    placeholder="password"
    type="password"
    value={pass}
    onChange={(text)=>{setpass(text.target.value)}}
    />   
    <div style={{alignSelf:"center"}}>
    <Link to="/">
    <Button type="submit" onClick={login}> Login</Button>
    </Link>
    </div>
    <div className="or"> 
    
    <h4>dont have an account?</h4> 
    
    </div>
    
    </div>
    <div>
    </div>
    
    <Link to="/signup"> Sign Up </Link>
    
    </from>
  
    </div>
  
    </div>
    
    )
  }
  
  export default LoginScreen;
