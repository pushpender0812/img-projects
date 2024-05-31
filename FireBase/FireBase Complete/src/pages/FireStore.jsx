import React from 'react'
import { getFirestore,collection,addDoc,doc,getDoc,query,where,getDocs,updateDoc} from 'firebase/firestore'
import { app } from '../firebase'

const firestore = getFirestore(app)

function FireStore() {

    const writeData = async() => {
      const result =  await addDoc(collection(firestore,'cities'),{
            name:'Delhi',
            pincode:1234,
            lat:123,
            long:456
        })
        console.log("result",result);
    }

 const makeSubCollection = async() => {
    await addDoc(collection(firestore,'cities/PdJrzsd7OFR73QiXSawJ/places'),{
        name:"This is a place",
        Description:"Awesome Destination",
        Date: Date.now()
    })
 }
   const getDocument = async() => {
    const ref = doc(firestore,'cities',"PdJrzsd7OFR73QiXSawJ")
   const snap = await getDoc(ref);

   console.log("Sanp",snap.data());
   }

   const getDocumentsByQuery = async() => {
    const collectionRef = collection(firestore,"users")
    const q = query(collectionRef,where("isMale","==",true))
    const shnapshot = await getDocs(q)
    shnapshot.forEach((data) => console.log(data.data()))
   }

   const update = async() =>{
    const docRef = doc(firestore,'cities','PdJrzsd7OFR73QiXSawJ');
    await updateDoc(docRef,{
           name:'New Delhi'
    })
   }

  return (
    <div>
      <h1>Firebase FireStore</h1>
      <button onClick={writeData}>Put Data</button>
      <button onClick={makeSubCollection}>Put Sub Data</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get Document By Query</button>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default FireStore
