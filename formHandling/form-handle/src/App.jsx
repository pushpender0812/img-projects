import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [namefull, setNamefull] = useState();
  const [fname, setFname] = useState();
  const [fnamefull, setFnamefull] = useState();
  const [email, setEmail] = useState();
  const [emailfull, setEmailfull] = useState();
  const [number, setNumber] = useState();
  const [numberfull, setNumberfull] = useState();
 

  const inputEvent = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const inputEvent1 = (e) => {
    // console.log(e.target.value);
    setFname(e.target.value);
  };
  const inputEvent2 = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const inputEvent3 = (e) => {
    // console.log(e.target.value);
    setNumber(e.target.value);
  };
 

  const onsubmits = (e) => {
    e.preventDefault();
    console.log(e);
    
   
        setNamefull(namefull);
    setFnamefull(fnamefull);
    setEmailfull(emailfull);
    setNumberfull(numberfull);
    console.log(name);
    console.log(fname);
    console.log(email);
    console.log(number);

    alert("Name :" + name);
    alert("Father's Name :" + fname);
    alert("Email :" + email);
    alert("Mobile :" + number);
     
    


    
  };

  return (
    <>
      <div>
        {/* <p>HEllO {namefull}</p> */}
        <form onSubmit={onsubmits}>
          <input
            type="text"
            onChange={inputEvent}
            className="mt-10 h-[80px] w-[400px] text-2xl"
            placeholder="Enter your  name"
            value={name}
            required
            // name="fname"
          />
          <br />
          <input
            type="text"
            onChange={inputEvent1}
            className="mt-10 h-[80px] w-[400px] text-2xl"
            placeholder="Enter your Father's name"
            value={fname}
            required
            // value={fullName.lname}
            // name="lname"
          />
          <br />
          <input
            type="email"
            onChange={inputEvent2}
            className="mt-10 h-[80px] w-[400px] text-2xl"
            placeholder="Enter your E-mail Id"
            value={email}
            required
          />
          <br />
          <input
            type="number"
            onChange={inputEvent3}
            className="mt-10 h-[80px] w-[400px] text-2xl"
            placeholder="Enter your mobile No"
            value={number}
           
            required
          />
          <br />
          <input
            type="checkbox"
            
            className="mt-10 h-[30px] w-[200px] text-2xl"
            
            required
           
          />
          <br />
          <button className="mt-10 h-[50px] w-[200px] text-2xl bg-cyan-300">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
