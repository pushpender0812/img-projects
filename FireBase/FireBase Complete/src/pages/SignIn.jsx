import React,{useState} from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

function SignIn() {

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const signInUser = () => {
        signInWithEmailAndPassword(auth,email,password).then((value) => alert("signIn SuccessFully")).catch((err) => console.log(err))
  }

  return (
    <div >
        <h1>SIGNIN PAGE</h1>
        <label htmlFor="">Enter Your Email</label>
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="">Enter Your Password</label>
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signInUser}>Sign ME IN  </button>
      
    </div>
  )
}

export default SignIn 
