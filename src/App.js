import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { Button } from '@material-ui/core'
import SignUpScreen from "./SignUpScreen";
import Context, { Provider } from "./MainContext";
import { auth } from "./firebase";


function App() 
{
 const [user,setUser]= useState(null);

 useEffect(() => {
         auth.onAuthStateChanged((user)=>{
         if (user)
         {
                setUser(user)

                
         }
         else
         {
                 setUser(null)
         }
         })}
 , [])
  
       return (
        <Context.Provider value={{user}}>
        <Router>
        <Switch>
        <Route path="/checkout">
        <h1>checkout</h1>
        </Route>
        <Route path="/lol">
        <h1>lol</h1>
        
        <Link to="/checkout"> <Button>sign up</Button> </Link>
        </Route>
        <Route path="/login">
        <LoginScreen/>
        </Route>  
        <Route path="/signup">
        <SignUpScreen/>
        </Route>
        <Route path="/">
        <HomeScreen />
        </Route>
        
        </Switch>
        </Router>
        </Context.Provider>
        
        
        );
  
}
 

export default App;
