import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useFirebase } from '../context/Firebase';

const Cards = (props) => {
    const firebase = useFirebase()
    const navigate = useNavigate()

    const [url,setUrl] = useState(null)

    useEffect(() => {
        firebase.getImageURl(props.imageURL)    .then((url) => setUrl(url))
    },[])
  return (
    <Card style={{ width: '18rem',margin:"25px" }}>
    <Card.Img variant="top" src={url} />
    <Card.Body>
      <Card.Title>Name :{props.name}</Card.Title>
      <Card.Text>
       Book Title is <b>{props.name}</b> and this book is sold by <b> {props.displayName}</b> and this Books Costs <b> Rs {props.price}</b>
      </Card.Text>
      <Button variant="primary" onClick={e => navigate(`/book/view/${props.id}`)}>View</Button>
    </Card.Body>
  </Card>
  )
}

export default Cards
