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

    if (firebase.isLoggedIn) {
      return (
        <div>
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Image Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Image Name" value={name} onChange={(e) => setName(e.target.value)} required/>
         
        </Form.Group>
    
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image Upload Date </Form.Label>
          <Form.Control type="text" placeholder={new Date().toLocaleDateString()} value={isbnNumber} onChange={(e) => setIsbnNumber(e.target.value)} required readOnly />
        </Form.Group> */}
    
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image Upload Time</Form.Label>
          <Form.Control type="number" placeholder={new Date().toLocaleTimeString()} value={price} onChange={(e) => setPrice (e.target.value)} required readOnly />
        </Form.Group> */}
    
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Upload Image </Form.Label>
          <Form.Control type="file"   onChange={(e) => setCoverPic(e.target.files[0])} required />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Add Image to Galary
        </Button>
      </Form>
        </div>
      )
    }
    return(
      <h1 className='mt-10 text-2xl font-semibold text-red-800'>Please Login/SignUp to upload Images</h1>
    )

  
}

export default List
