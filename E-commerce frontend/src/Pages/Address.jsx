import React from 'react'
import { NavLink } from 'react-router-dom'

function Address() {
  return (
    <div className='mt-10'>
      
      <b className='text-4xl font-semibold'>Please Enter Your Address</b>
      <form action="payment">
      <div className='mt-10 text-left grid'>
        <label htmlFor="" className='mr-5 text-xl'>Address Line 1 :</label>
        <input className='h-16 w-72' type="text" required />
        <label htmlFor="" className='mr-5 text-xl mt-10 '>Address Line 2 :</label>
        <input className='h-16 w-72' type="text" required />
        <label htmlFor="" className='mr-5 text-xl mt-10'>Address Line 3 :</label>
        <input className='h-16 w-72' type="text" required />
      </div>
    <NavLink to={'/product/payment'}>  <button className='bg-gray-300 h-16 w-72 rounded-xl mt-5 text-2xl'>Proceed to Payment</button></NavLink>
      </form>
          </div>
  )
}

export default Address
