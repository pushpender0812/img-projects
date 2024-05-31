import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useFirebase } from '../context/Firebase';

import { useFirebase } from '../context/Firebase';

const Cards = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()

    const [url,setUrl] = useState(null)

    useEffect(() => {
        firebase.getImageURl(props.imageURL).then((url) => setUrl(url))
    },[])

    const handleDelete = async() => {
      await firebase.deleteImage(props.imageURL)
      await firebase.deleteDocumentBYId('books',props.id,props.name)
      alert("successfully deleted")
      window.location.reload( )
    }

    if (firebase.isLoggedIn) {
      if (url !== null) {
        return (
          <Card style={{ width: '18rem',margin:"25px" }} className='flex'>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>Name :{props.name}</Card.Title>
            {/* <Card.Text>
             Book Title is <b>{props.name}</b> and this book is sold by <b> {props.displayName}</b> and this Books Costs <b> Rs {props.price}</b>
            </Card.Text> */}
            <Button className='mt-10' variant="primary" onClick={e => navigate(`/book/view/${props.id}`)}>View</Button>
            <br />
            <button className='mt-10 bg-red-700 text-white rounded-2xl w-[150px] h-[50px] ' onClick= {handleDelete}>Delete Image</button>
          </Card.Body>
        </Card>
        )
      }
     
    }

    return (
      <h1></h1>
    )

  
}

export default Cards
