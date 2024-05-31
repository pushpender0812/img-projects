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
        <h1 className='text-3xl'>Image Name : <b>{data.name}</b></h1>
        {/* <h4>ISBN No. :{data.isbn}</h4> */}
        {/* <h2>Image Uploded time: {data.time}</h2> */}
     <img src={url} className='mb-10' alt="" />
     {/* <h3>Rs.{data.price}</h3> */}
     <hr />
    <b> <h1 className='text-2xl mb-3'>Image Uploaded BY</h1></b>
     
     {/* <img src={data.photoURL} alt="" /> */}
     <p>Name : {data.displayName}</p>
     <p>Email : {data.userEmail}</p>
    </div>
  )
}

export default Details
