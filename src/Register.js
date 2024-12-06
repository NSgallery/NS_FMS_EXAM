import './Register.css';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async(event) => {
      event.preventDefault();
   
      let item = {name, email, password}
      console.warn(item)

      if((name && email && password ) !== "")
        try{
          const response = await axios.post('http://localhost:8000/api/register', { name, email, password });
          console.log(response.data)
          return alert("Register Success:)");

        } catch  (e) {
          console.log(e)
          return alert("Register Failed:(");
        }

      else
        return alert("Please, Enter your data to register");
    }

    return (

      <div className="main-block">
        <h1>Register Page</h1>
        <form onSubmit={handleRegister}> 
          <input value={name} onChange={(e) => setName(e.target.value)} className="regist-input-box" type="text" id="name_user" name="name_user" placeholder='Name' />
          <br/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="regist-input-box" type="email" id="email_user" name="email_user" placeholder='Email' />
          <br/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} className="regist-input-box" type="password" id="pwd_user" name="pwd_user" placeholder='Password' />
          <br/>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </form> 
      </div>
      
    );
}

export default Register;