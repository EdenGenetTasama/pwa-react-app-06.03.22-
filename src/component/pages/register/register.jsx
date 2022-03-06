import React, { useState } from 'react';


export default function Register() {
  const [emailRegister , setEmailRegister] = useState("");
  const [passwordRegister , setPasswordRegister] = useState("");

  // const register=()=>{
  //   const user = 
  // }


  return (<div style={{color: "red"}}>
    <h1>register</h1>
    <input type="text" placeholder='email..' onChange={(event)=>{setEmailRegister(event.target.value)}}/>
    <input type="text" placeholder='password..' onChange={(event)=>{setPasswordRegister(event.target.value)}}/>
    <button type='button'>register</button>
    <div>User that register: </div>
    </div>
  )
}
