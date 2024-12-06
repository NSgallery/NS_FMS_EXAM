import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigin = async(event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      console.log(response.data)
      
      if(response.data.status === true){
        window.location.href = "tasks";
      }
      else{
        window.location.href = "login";
      }
    
    } catch(event) {
      console.log(event)
    }
  };

  return (

    <div className="main-block">
        <h1>Login</h1>
        <form onSubmit={handleSigin}> 
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="login-input-box" type="email" id="email_user" name="email_user" placeholder='Email' />
          <br/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="login-input-box" type="password" id="pwd_user" name="pwd_user" placeholder='Password' />
          <br/>
          <Button type="submit" className="btn btn-primary">Sign-in</Button>
        </form>
    </div>
   
  );
}

export default Login;