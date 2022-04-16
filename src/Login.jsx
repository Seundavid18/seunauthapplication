import React, { useEffect, useState } from "react";
import {Navigate} from 'react-router-dom'
import Navbar from "./Navbar";

function Login() {
    const [state, setState] = useState({email: '', password:""})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
        setLoggedIn(true)
      }
    })

    const handleForm =(e) =>{
      const {name, value} = e.target
      setState(prevState => ({...prevState, [name]:value}))
    }

    const submitForm =(e) => {
      e.preventDefault();
      if(state.email !="" && state.password !=""){
        // submit form
        localStorage.setItem('user', JSON.stringify(state))
        setLoggedIn(true)
      }else{
        alert('Email and Password is required')
      }
    }

    return (
      loggedIn ? <Navigate to="/dashboard" /> :
      <div>
        <Navbar />
        <div className="container pb-5">
          <div className="row mx-auto justify-content-center align-items-center flex-column">
            <div className="col-lg-6">
              <div className="card mt-5 mb-5 form-div">
                <div className="card-body">
                  <h1 className="mb-4 fs-3 text-center">Login</h1>
                  <form onSubmit={submitForm}>
                    <div className="form-group">
                      <label className="mb-2 fs-6">Email</label>
                      <input 
                      className="form-control mb-3" 
                      type="email" 
                      name="email" 
                      value={state.email} 
                      placeholder="Your Email Address" 
                      onChange={handleForm}
                      />
                    </div>
                    

                    <div className="form-group">
                      <label className="mb-2 fs-6">Password</label>
                      <input className="form-control mb-4" 
                      type="password" 
                      name="password" 
                      value={state.value} 
                      placeholder="Your Password" 
                      onChange={handleForm}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <input className="btn btn-primary" type="submit" value="Log in" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  