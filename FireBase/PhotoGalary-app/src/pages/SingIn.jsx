import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {

    const firebase = useFirebase()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    
    useEffect(() => {
     if (firebase.isLoggedIn) {
        navigate("/")
     }
    },[firebase,navigate])


  const handleSubmit = async(e) => {
   e.preventDefault()
   console.log("login  User ....");
    await firebase.signinUserWithEmailAndPassword(email,password)
    console.log("Login Successfull");
  }

  return (
    <>
    <h1>Alredy have Account ! SingIN Here</h1>
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
      LogIn
    </Button>
  </Form>
  <br />

  <h1>OR</h1>
  <br />
 <button variant="danger " onClick={firebase.signInwithGoogle}>SingIn With Google</button>

  </>
  )
}

export default SingIn
