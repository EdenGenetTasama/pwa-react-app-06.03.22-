import React, { useState } from 'react'
import './login.scss';



export default function Login() {
  const [emailLogin , setEmailLogin] = useState("");
  const [passwordLogin , setPasswordLogin] = useState("");
  return (<div>
    <h1>Login</h1>
    <input type="text" placeholder='email..' onChange={(event)=>{setEmailLogin(event.target.value)}}/>
    <input type="text" placeholder='password..' onChange={(event)=>{setPasswordLogin(event.target.value)}}/>
    <button type='button'>Login</button>
    <div>User that Login: </div>
    </div>
  )
}
