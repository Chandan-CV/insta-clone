import { Avatar, Button } from '@material-ui/core'
import React,{useState,useContext} from 'react'
import { db } from './firebase';
import Context from './MainContext';
import './Post.css'
function Post({userName , imageUrl, caption, id}) {

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

        </div>
    )
}


export default Post
