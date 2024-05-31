import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

function Details() {
    const params = useParams()
    const firebase = useFirebase()

    const [data,setData] = useState(null)
    const [url,setUrl] = useState(null)

    useEffect(() => {
       firebase.getBookById(params.bookId).then((value) => setData(value.data()))
    })

    useEffect(() => {
        if (data) {
            const imageURL = data.imageURL;
            firebase.getImageURl(imageURL).then((url) => setUrl(url))
        }
    },[data])


    if (data === null) 
        return <h1>Loading ........</h1>
    

  return (
    <div className='container'>
        <h1>{data.name}</h1>
        <h4>ISBN No. :{data.isbn}</h4>
     <img src={url} alt="" />
     <h3>Rs.{data.price}</h3>
     <h1>Owner Details</h1>
     {/* <img src={data.photoURL} alt="" /> */}
     <p>Name : {data.displayName}</p>
     <p>Name : {data.userEmail}</p>
    </div>
  )
}

export default Details
