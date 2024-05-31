import { createContext, useContext,useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
signInWithPopup,signOut} from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore,collection,addDoc,getDocs,getDoc,doc,deleteDoc} from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL,deleteObject } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDeq6GTqhMv3V-xFYLCE6rMBOzk5YeEZQY",
  authDomain: "bookify-16bdc.firebaseapp.com",
  projectId: "bookify-16bdc",
  storageBucket: "bookify-16bdc.appspot.com",
  messagingSenderId: "271864271387",
  appId: "1:271864271387:web:32b4a48922946623bb5ebe"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

const googleProvider = new GoogleAuthProvider()

export const FirebaseProvider = (props) => {

  const [user,setUser] = useState(null)

    useEffect(() => {
onAuthStateChanged(firebaseAuth,user => {
    if (user) setUser(user)
        else setUser(null)
})
    },[])

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signinUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword(firebaseAuth,email,password)

 const signInwithGoogle = () => signInWithPopup(firebaseAuth,googleProvider)

 const handlecreatenewListing = async(name,isbn,price,coverPic,date,time) => {
    const imageRef = ref(storage,`uploads/images/${Date.now()}-${coverPic.name}`)
    const uploadResult = await uploadBytes(imageRef,coverPic)
    return await addDoc(collection(firestore,'books'),{
        name,
        isbn,
        price,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString(),
        imageURL:uploadResult.ref.fullPath,
        userId:user.uid,
        userEmail:user.email,
        displayName:user.displayName,
        photoUrl:user.photoURL,
    })
 }

 const listAllBooks = () => {
  return getDocs(collection(firestore,"books"))
 }
 const getImageURl = (path) => {
   return getDownloadURL(ref(storage,path))
 }

 const getBookById = async(id) => {
   const docRef = doc(firestore,'books',id)
   const result = await getDoc(docRef)
   return result
 }

 const deleteImage = async(path) => {
  const imgRef =  ref(storage,path)
   await deleteObject(imgRef)
 }

 const deleteDocumentBYId = async (collection,id) => {
   const deleteRef =  doc(firestore,collection,id)
   await deleteDoc(deleteRef)
 }

 const isLoggedIn = user ? true : false

 const logout = async() => {
   const loggedout = await signOut(firebaseAuth)
   return loggedout
 }
   
  return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword,signInwithGoogle,isLoggedIn,handlecreatenewListing,listAllBooks,getImageURl,getBookById,logout,deleteImage,deleteDocumentBYId}}>
    {props.children}
    </FirebaseContext.Provider>;
};
