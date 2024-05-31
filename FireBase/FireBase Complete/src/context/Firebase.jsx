import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase,set,ref,get,child ,onValue  } from "firebase/database";



const firebaseConfig = {

    apiKey: "AIzaSyB-i3IS-jH5NN1qJOEUJEQbrg0vKtCvCJ4",
    authDomain: "app-bf4db.firebaseapp.com",
    projectId: "app-bf4db",
    storageBucket: "app-bf4db.appspot.com",
    messagingSenderId: "906005026335",
    appId: "1:906005026335:web:c026779553c4b4d39e672a",
    databaseURL:"https://app-bf4db-default-rtdb.firebaseio.com/"
  };

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)


const FirebaseContext = createContext(null);

export const useFibrebase = () => useContext(FirebaseContext)

export const FirebaseProvider = (props) => {

    const [name,setName] = useState("")

    const signupUserwithEmailAndPassword = (email,password) => {
        return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }

    const putData = (key,data) => set(ref(database,key),data)

    // get(child(ref(database),"root/a")).then(snapshot => {
    //     console.log(snapshot.val());
    // })

  // useEffect(() =>{
  //   onValue(ref(database,"root/a/b  "),(snapshot) =>
  //       setName(snapshot.val().name) 
  // )
  // },[])

    return (
          <FirebaseContext.Provider value={{signupUserwithEmailAndPassword,putData}}>
            <h3>NAme:{name}</h3>
            {props.children}
          </FirebaseContext.Provider>
    )
}