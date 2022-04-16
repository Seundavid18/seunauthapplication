import React, {useState, useEffect} from "react";
import {Link, Navigate} from "react-router-dom"
import Navbar from "./Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [loggedIn, setLoggedIn] = useState(true)
    useEffect(()=>{
        if(!user){
            setLoggedIn(false)
        }
    }) 
    return (
      loggedIn ?
      <div>
        <Navbar />
        <div className="container space">
          <div className="content">
            <h1>Welcome To your Dashboard</h1>
            <p>Your Dashboard is now accessible after  authorization</p>
            <p>Your Email is: <b>{user && user.email}</b></p>
            <p><Link to="/logout">Log Out</Link></p>
          </div>
        </div>
      </div>:<Navigate to="/login" />
    );
  }
  
  export default    Dashboard;