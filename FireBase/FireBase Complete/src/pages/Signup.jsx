import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';

const auth = getAuth(app)
const googleProvider = new  GoogleAuthProvider();

function Signup() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

  const createUser = () =>{
   createUserWithEmailAndPassword(auth,email,password)
   .then((value) => alert('User SignUp Successfully'))
  }

  const signupwithGoogle = () => {
    signInWithPopup(auth,googleProvider)
  }

  return (
    <div className='signuppage'>
        <h1>SignUp Page </h1>
        <label htmlFor="">Email :</label>
      <input type="email" required placeholder='Enter Your Email Here' value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="">Password :</label>
      <input type="password" required placeholder='Enter Your Password Here' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={createUser}>SignUp</button>
      <br />
      <button onClick={signupwithGoogle}>Sign In With Google</button>
    </div>
  )
}

export default Signup
