import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';

const List = () => {
 
    const firebase = useFirebase()

    const [name,setName] = useState('')
    const [isbnNumber,setIsbnNumber] = useState('') 
    const [price,setPrice] = useState('') 
    const [coverPic,setCoverPic] = useState('') 

    const handleSubmit = async(e) => {
   e.preventDefault()
   await firebase.handlecreatenewListing(name,isbnNumber,price,coverPic)
   alert('SUbmit SUccessfully')
    }

  return (
    <div>
        <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter Book Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Book Name" value={name} onChange={(e) => setName(e.target.value)} required/>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ISBN</Form.Label>
      <Form.Control type="text" placeholder="Enter ISBN Number" value={isbnNumber} onChange={(e) => setIsbnNumber(e.target.value)} required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice (e.target.value)} required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Upload Image </Form.Label>
      <Form.Control type="file"   onChange={(e) => setCoverPic(e.target.files[0])} required />
    </Form.Group>
   
    <Button variant="primary" type="submit">
      Create
    </Button>
  </Form>
    </div>
  )
}

export default List
