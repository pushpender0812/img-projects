import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Account from './Account'
import Bonus from './Bonus'
import { useSelector } from 'react-redux'
import Reward from './Reward'
import Admin from './Admin'

function App() {

 const amount =  useSelector(state => state.account.amount)
 const points =  useSelector(state => state.bonus.points)
 const account = useSelector(state => state.account)

//   const [account, setAccount] = useState({ amount: 0 });
//   const [bonus,setBonus] = useState({points:0})

//   const increment = () => {
//     setAccount({ amount: account.amount + 1 });
//   };

//   const decrement = () => {
//     setAccount({ amount: account.amount - 1 });
//   };

//   const incrementByAmount = (value) => {
//     setAccount({ amount: account.amount + value });
//   };

//   const increments = () => {
//     setBonus({points:bonus.points + 1})
// }

  return (
   <>
   <div>
    <h4>App</h4>
    {
      account.pending ? <p>loading..  </p> : account.error ? <p>{account.error}</p> : <h3>Current  Ammount:{amount}</h3>
    }
    
    <h3>Total Bonus: {points}</h3>
   </div>
<br />
<br />
   <Account 
   />
   <br /><br />
   <Bonus 
   
   />
   <br />
   <Reward/>
   <br />
   <Admin/>
   </>
  )
}

export default App
