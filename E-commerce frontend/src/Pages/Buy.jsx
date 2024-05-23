import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addAsync } from './cart/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { increaseQuantity,decreaseQuantity } from './cart/cartSlice';

function Buy() {

    const {id} = useParams();
    const [product,setProduct] = useState(null);
    // const items = useSelector((state) => state.cart.items)
// console.log(items.quantity);
const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then(response => response.json())
       .then(data => setProduct(data))
       .catch(error => console.error("Error Petching Products",error))

    },[id])
    // console.log(product.quantity);

    if (!product) {
        return <p>Loading........</p>
    }


    const IncreseQuant = () => {
       setQuantity((prevQuantity => prevQuantity + 1)) ;
      }
      
      
      const DecreseQuant = () => {  
        // const decQuant = (prevQuantity => prevQuantity - 1)
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        } else {
            alert('product quantiy cannot be negative')
        }
        
      }


      const addToCart = () => {
        const productWithQuantity = { ...product, quantity };
        dispatch(addAsync(productWithQuantity));
    }

  return (
    <>
    <div>
    <h1 className='mt-10 bg-orange-500 text-3xl h-20 rounded-3xl font-bold'> Name : <span className='text-white'>{product.title}</span></h1>
    </div>
   
    <div className='grid '>
   
        <div>
        <p className='text-3xl font-semibold bg-white h-16 w-56 mt-5 rounded-2xl mb-10'>Product Id : {product.id}</p>
        </div>
       
       
       
        <div className='flex'>
        <div className="card bg-orange-400 rounded-3xl pt-7  w-[600px]" key={product.id}>
        <b className='text-2xl'>  Price : ${product.price}</b> 
        <br /><br />
          <img className='h-[200px]' src={product.image} alt={product.title}  />
          
          {/* <p className="price">${product.price}</p> */}
          {/* <p>{product.description}</p> */}
          {/* <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p> */}
           <br />
            <b>Rating : {product.rating.rate}</b>
            <br />
            <br />
            <b>Rating Count : {product.rating.count}</b>
            <br />
            <hr />
            <br />
            <b>About Product</b>
            <br />
            <br />
            <p className='text-xl'>{product.description}</p>
            <br />
          </div>
          <div>

          
          <div className='flex mr-36 mt-36  ' >
         <button className='  text-3xl bg-rose-500 h-10 w-10 ' onClick={() => DecreseQuant(product.id)}>-</button>
         <b className='text-3xl ml-5 mr-5'>Quantity : {quantity}</b>
         <button className=' text-3xl bg-rose-500 h-10 w-10' onClick={() => IncreseQuant(product.id)}>+</button>
         </div>


         <div>
         <h1 className='mt-24 text-3xl mr-20 font-semibold'>Total Price  = ${product.price * quantity}</h1>
         </div>
         <div className='mt-28 mr-10'>
         <button className='bg-red-300 hover:bg-yellow-500 rounded-2xl w-36 h-24 text-2xl font-bold' onClick={() => addToCart()}>Add to Cart</button>
         </div>
         </div>
        <div className='grid'>
            <img src={product.image} className='h-40 w-64' alt={product.title} />
            <br />
            <img src={product.image}className='h-40 w-64' alt={product.title} />
            <br />
            <img src={product.image} className='h-40 w-64' alt={product.title} />
            <br />
            <img src={product.image} className='h-40 w-64' alt={product.title} />
            <br />
            

          </div>
        </div>
       
          
          <div className='text-3xl mr-24 mt-12' >
       
       
         
        
        
           
            <NavLink to={`/product/${product.id}/address`}  > <button className='bg-black text-cyan-200 hover:bg-yellow-500 rounded-2xl w-72 h-24 mb-10'>Proceed Here To Buy</button></NavLink>
            
            <br />
          
          </div>
         
    </div>
    </>
  )
}

export default Buy
