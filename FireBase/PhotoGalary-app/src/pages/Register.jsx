import React, { useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const firebase = useFirebase()
    console.log(firebase);

    useEffect(() => {
        if (firebase.isLoggedIn) {
           navigate("/")
        }
       },[firebase,navigate])

  const handleSubmit = async(e) => {
   e.preventDefault()
   console.log("Signing Up A User");
    await firebase.signupUserWithEmailAndPassword(email,password)
    console.log("signUp Successfull");
  }

  return (
    <>
    <h1 className='mb-10'>New User ! Register Here</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Create Account
    </Button>
  </Form>
  </>

  )
}

export default Register
