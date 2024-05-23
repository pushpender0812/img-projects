import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'





    



function Payments() {
   
const navigate = useNavigate()

const orderPlaced = () => {
    alert("Your Order is Placed Successfully")
    navigate('/')
    setTimeout(() => {
        alert("Continue Shoping .....")
    },1000)
}
  return (
    <div className='mt-10'>
     <p className='text-4xl font-bold'> Select Payment Option</p>
     <div className='flex mt-10'>
        <input type="checkbox" />
        <h1 className='text-2xl ml-5'>Cash On Delivery</h1>
     </div>
     <div className='flex mt-10'>
        <input type="checkbox" />
        <h1 className='text-2xl ml-5'>Debit Card/Credit Card</h1>
     </div>
     <div className='flex mt-10'>
        <input type="checkbox" />
        <h1 className='text-2xl ml-5 mr-3'>UPI :</h1>
        <div className='grid'>
            {"chexkbox" !== true ? (
        <input type="text" />) : ""}
        
        </div>
        
     </div>
     <div className='flex mt-10'>
        <input type="checkbox" />
        <h1 className='text-2xl ml-5'>Net Banking</h1>
     </div>
     <div>
       <button onClick={orderPlaced} className='mt-20 text-2xl font-extrabold bg-gray-400 w-48 h-24 rounded-xl'>Place Order</button>   
     </div>
    </div>
  )
}

export default Payments
