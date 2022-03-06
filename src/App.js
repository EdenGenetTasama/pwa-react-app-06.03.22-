import React from 'react';
import logo from './logo.svg';
import './App.css';
import './firebase.js';
import Login from './component/pages/login/login';
import Register from './component/pages/register/register';
import Navbar from './component/pages/navbar/navbar.jsx';
// import firebase from 'firebase/compat/app';
import {useAuthState} from 'react-firebase-hooks/auth';
import HomePage from './component/pages/homePage/homePage';

// const firebaseAuth = firebase.auth();

function App() {
  // const [user] = useAuthState(firebaseAuth);
  // const [auth , setAuth] = React.useState(null);
  // React.useEffect(()=>{
  //   setAuth(firebaseAuth)
  // },[])
  // const singWithGoogle=()=>{
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth.singWithGoogle(provider)
  // }
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <button type='button' >HomepageBUT</button>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
