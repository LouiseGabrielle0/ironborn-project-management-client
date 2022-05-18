// src/context/auth.context.js

import React, { useState, useEffect } from "react";
import axios from "axios";
// const API_URL = "http://localhost:5005"; - Luis removes this and puts it in .env 

const AuthContext = React.createContext(); //Another way to import ThemeContext -
// ^^ This is a context object that gives us a provider and something to wrap around the app

// exposing these -  isLoggedIn, isLoading, user  - which can change over time so saved in a state

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // To enable access to the values exposed through the Provider’s (AuthContext.Provider) value prop, we have to wrap the AuthProviderWrapper around other components. 
  
  /* 
    Functions for handling the authentication status (isLoggedIn, isLoading, user)
    will be added here later in the next step
  */

    const storeToken = (token) => {       
        localStorage.setItem('authToken', token);
      }  
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken }}> 
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };

// ^^^ exporting the component
