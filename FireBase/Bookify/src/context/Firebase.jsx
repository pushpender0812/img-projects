import { createContext, useContext,useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
signInWithPopup} from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore,collection,addDoc,getDocs,getDoc,doc} from "firebase/firestore";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyC5bpitHb-zi5BmGLPPKHHF8TYl3By3at0",
  authDomain: "photogalary-1ae5b.firebaseapp.com",
  projectId: "photogalary-1ae5b",
  storageBucket: "photogalary-1ae5b.appspot.com",
  messagingSenderId: "562452018604",
  appId: "1:562452018604:web:42c43e1fac415b45c9b609"
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

 const handlecreatenewListing = async(name,isbn,price,coverPic) => {
    const imageRef = ref(storage,`uploads/images/${Date.now()}-${coverPic.name}`)
    const uploadResult = await uploadBytes(imageRef,coverPic)
    return await addDoc(collection(firestore,'books'),{
        name,
        isbn,
        price,
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

 const isLoggedIn = user ? true : false
   
  return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword,signInwithGoogle,isLoggedIn,handlecreatenewListing,listAllBooks,getImageURl,getBookById}}>
    {props.children}
    </FirebaseContext.Provider>;
};
