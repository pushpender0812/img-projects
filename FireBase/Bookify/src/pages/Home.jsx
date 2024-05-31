import React,{useEffect,useState} from 'react'
import { useFirebase } from '../context/Firebase'
// import { CardGroup } from 'react-bootstrap'

import Cards from '../components/Card'



function Home() {
 
    const firebase = useFirebase()

    const [books,setBooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    },[])

  return (
    <div>
        {/* <CardGroup> */}
     {books.map(book => 
    <Cards key ={book.id} id={book.id} {...book.data()} /> 
   ) }
   {/* </CardGroup> */}
    </div>
  )
}

export default Home
