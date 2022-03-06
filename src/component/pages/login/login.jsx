import React, { useState } from 'react'
import './login.scss';



export default function Login() {
  const [emailLogin , setEmailLogin] = useState("");
  const [passwordLogin , setPasswordLogin] = useState("");
  return (<div>
    <h1>Login</h1>
    <input type="text" placeholder='email..'/>
    <input type="text" placeholder='password..'/>
    <button type='button'>Login</button>
    <div>User that Login: </div>
    </div>
  )
}
