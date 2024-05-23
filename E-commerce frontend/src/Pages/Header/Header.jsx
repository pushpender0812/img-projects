import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header() {
  const items = useSelector((state) => state.cart.items)
  // console.log(items.quantity);

  return (
    <>
     
       
      
    <div className='justify-between items-center flex bg-transparent h-20 text-white font-bold text-2xl rounded-3xl'>
     
        <NavLink to="/"> <p className=' cursor-pointer hover:underline text-orange-400' >Home</p></NavLink>
        <NavLink to="/men"> <p className=' cursor-pointer hover:underline text-orange-400'>Mens'wear</p></NavLink>
        <NavLink to="/women"><p className=' cursor-pointer hover:underline text-orange-400'>Womens'wear</p></NavLink>
        <NavLink to="jwellery"> <p className=' cursor-pointer hover:underline text-orange-400'>Jwellery</p></NavLink>
        
        <NavLink to="electronics"> <p className=' cursor-pointer hover:underline text-orange-400'>Electronics</p></NavLink>
       
        <NavLink to="cart"> <p className=' cursor-pointer'>🛒<b className='  rounded-3xl text-white bg-red-500'>{items.length}</b></p></NavLink>
     
       
        
       
     
    </div>
      
    
</>
  )
}

export default Header
