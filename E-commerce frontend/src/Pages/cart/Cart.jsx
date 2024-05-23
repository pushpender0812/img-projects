import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteAsync, fetchAsync,increaseQuantity,decreaseQuantity} from './cartSlice';
import { updateQuantity } from './cartApi';
import { NavLink } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  // const [count,setCount] = useState(0)
  // console.log(items.quantity);
  
// localStorage.setItem("cartItems",JSON.stringify(items.map((item) => item)))

//   const localItems = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];

// useEffect(() => {
//   dispatch(fetchAsync())
// },[dispatch])

const handleDeleteItem = (id) => {
  dispatch(deleteAsync(id))
 
}
// const IncreseQuant = (id) => {
//   dispatch(increaseQuantity(id));
// }


// const DecreseQuant = (id) => {  
//   dispatch(decreaseQuantity(id))
  
// }




  return (
    <>
    <div className='grid grid-cols-3 gap-3'>
      {items.map((item) => (
        
         <div className="card h-[650px] w-[700px] bg-orange-500 rounded-3xl border-dotted border-4 border-indigo-600" key={item.id}>
          <p><b>Product id :</b>{item.id}</p>
         <img className='h-[200px]' src={item.image} alt={item.title}  />
         <h1><b>Product Name:</b>  {item.title.slice(0,20) + '.....)'}</h1>
         <p className="price"><b>$</b>{item.price}</p>
         {/* <p><b>About Product :</b>{item.description.slice(0,100) + '.........)'}</p> */}
         <p><b>Rating :</b>{item.rating.rate}</p>
         <p><b> Count :</b>{item.rating.count}</p>
         <br />
         <b>Quantity :{item.quantity}</b>
         {/* <div className='flex'>
         <button className='h-8 w-3' onClick={() => DecreseQuant(item.id)}>-</button>
         <b>Quantity :{item.quantity}</b>
         <button className='h-8 w-3' onClick={() => IncreseQuant(item.id)}>+</button>
         </div> */}
         <br />
         <br />
         <button onClick={() => handleDeleteItem(item.id)}>Remove From Cart</button>
         <br />
         <br />
         <NavLink to={`/product/${item.id}`}  > <button >Buy Now</button></NavLink> 
       </div>
      ))}
      <br />
      <hr />
      
    </div>
    <br />
    <br />
    <h1 className='text-5xl font-bold text-yellow-400'>Total Amount : $ <span>{items.reduce((acc,item) => item.price * item.quantity + acc ,0)}</span></h1>
    </>
    )
  
}

export default Cart
