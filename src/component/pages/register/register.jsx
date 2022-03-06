import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailRegister, passwordRegister)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ color: "red" }}>
      <h1>register</h1>
      <input
        type="text"
        placeholder="email.."
        onChange={(event) => {
          setEmailRegister(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password.."
        onChange={(event) => {
          setPasswordRegister(event.target.value);
        }}
      />
      <button type="button" onClick={register}>
        register
      </button>
      <div>User that register: </div>
    </div>
  );
}
