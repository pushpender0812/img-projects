import React, { useState } from "react";
import { increment,decrement,incrementByAmount,getUserAccount } from "./slices/accountSlice";
import { useSelector,useDispatch } from "react-redux";

function Account() {
 
  const [value, setValue] = useState(0);

  const points =  useSelector(state => state.bonus.points)
 const amount =  useSelector(state => state.account.amount)
const dispatch = useDispatch()

    

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <h3>Bonus :{points}</h3>
        <button onClick={() => dispatch(increment()) }>Increment +</button>
        <button onClick={() => dispatch(decrement()) }>Decrement -</button>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value}
        </button>
        <br />
        {/* <button onClick={() => dispatch(getUserAccount(1))}>
          Init Account
        </button> */}
         <button onClick={() => dispatch(getUserAccount(1))}>
          Get Usser
        </button>
      </div>
    </div>
  );
}

export default Account;
