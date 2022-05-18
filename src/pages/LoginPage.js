// src/pages/LoginPage.js

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();

//   const handleEmail = (e) => setEmail(e.target.value);
//   const handlePassword = (e) => setPassword(e.target.value);
// ^^ Another way to handle onClick - this way you just pass the function on the click
  
const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password }; //create an object from the state
 
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
      // Request to the server's endpoint `/auth/login` returns a response
      // with the JWT string ->  response.data.authToken
        console.log('JWT token', response.data.authToken );
      
        navigate('/');                             // <== ADD      
      })
      .catch((error) => {
          console.log("error logging in", error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
 
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
     

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;
