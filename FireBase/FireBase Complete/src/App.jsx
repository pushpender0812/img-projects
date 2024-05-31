import { useEffect,useState } from "react";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import { app } from "./firebase";
import { useFibrebase } from "./context/Firebase";

import "./App.css";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import FireStore from "./pages/FireStore";


const auth = getAuth(app)

function App() {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");


  const firebase = useFibrebase()

  // console.log("Firebase",firebase);

  const putNewData = () => {
    firebase.putData("root/a/b",{id:1,name:"Bhuvii",age:7})
    console.log("data triggered successfully");
  }

  // useEffect(() => {
  //       onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //           // yes ,you are logged In
  //           console.log('Hello',user)
  //           setUser(user)
  //         } else {
  //              // User is logged out
  //              console.log("you are logged out");
  //              setUser(null)
  //         }
  //       })
  // },[])
 
  // // const signupUser = () => {
  // //   createUserWithEmailAndPassword(
  // //     auth,
  // //     "pyadav96800@gmail.com",
  // //     "yadav@123"
  // //   ).then((value) => console.log(value))
  // // }

  // if (user === null) {
  //   return (
  //     <>
  //    <Signup/>
  //    <br />
  //    <SignIn/>
  //   </>
  //   )
  // }

  return (
    // <>
    //  {/* <h1>Hello {user.email}</h1>
    //  <button onClick={() => signOut(auth)}>Sign Out</button> */}

    //  <h1>Firebase</h1>
    //  <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
    //  <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
    //  <button onClick={() => {firebase.signupUserwithEmailAndPassword(email,password)
    //   firebase.putData("users/" + "email", {email,password})
    //  }}
    //  >SignUp</button>
    //  <br />
    //  <button onClick={putNewData}>Trigger</button>
    // </>
    <>
    <FireStore/>
    </>
  );
}

export default App;
