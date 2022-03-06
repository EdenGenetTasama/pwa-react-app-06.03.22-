import React from 'react';
import logo from './logo.svg';
import './App.css';
import './firebase.js';
import Login from './component/pages/login';
import Register from './component/pages/register';
import firebase from 'firebase/compat/app';
import {useAuthState} from 'react-firebase-hooks/auth';

const firebaseAuth = firebase.auth();

function App() {
  const [user] = useAuthState(firebaseAuth);
  const [auth , setAuth] = React.useState(null);
  React.useEffect(()=>{
    setAuth(firebaseAuth)
  },[])
  const singWithGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.singWithGoogle(provider)
  }
  return (
    <div className="App">
      <h1>Title</h1>
      <button type='button' onClick={singWithGoogle}>HomepageBUT</button>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
