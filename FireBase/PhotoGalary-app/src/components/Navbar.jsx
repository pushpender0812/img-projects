import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

function Navbars() {

  const firebase = useFirebase()
  const navigate = useNavigate()

  const logOUt = () => {
    firebase.logout().then(() => {
      alert("User SignOut Successfully")
      navigate('/login')
    })
  }
  
  if (firebase.isLoggedIn) {
    return (
      <>
      <Navbar bg="dark" data-bs-theme="dark" className='grid gap-10 grid-cols-5'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/">Galary</Nav.Link>
            <Nav.Link href="/book/list" className='ml-20'>Add Image</Nav.Link>
            {/* <Nav.Link href="register" className='ml-20'>Register</Nav.Link> */}
            {/* <Nav.Link href="login" className='ml-20'>login</Nav.Link> */}
            <Nav.Link onClick={logOUt} className='ml-20'>LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  
     
    </>
    )
  }

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" className='grid gap-10 grid-cols-5'>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link href="/">Galary</Nav.Link>
          <Nav.Link href="/book/list" className='ml-20'>Add Image</Nav.Link>
          <Nav.Link href="register" className='ml-20'>Register</Nav.Link>
          <Nav.Link href="login" className='ml-20'>login</Nav.Link>
          {/* <Nav.Link href="" className='ml-20'>LogOut</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  

   
  </>
  )
}

export default Navbars
