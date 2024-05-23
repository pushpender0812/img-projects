import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./All.css";
import { useDispatch } from "react-redux";
import { fetchAsync } from "./Product/productSlice";
import { addAsync } from "./cart/cartSlice";
import { NavLink } from "react-router-dom";


function Electronics() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const filterproducts = products.filter(product => product.category === "electronics")

 useEffect(() => {
    dispatch(fetchAsync())
 },[])

  return (
    <div className="grid grid-cols-3 gap-4">
        
      {filterproducts.map((product) => (
        
        <div className="card h-[600px] bg-orange-500 rounded-3xl border-dotted border-4 border-indigo-600" key={product.id}>
          <img src={product.image} className="h-[200px]" alt="Denim Jeans"  />
          <h1>{product.title.slice(0,50) + '.....)'}</h1>
          <p className="price">${product.price}</p>
          <p>{product.description.slice(0,100) + '.........)'}</p>
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
       <NavLink to={`/product/${product.id}`}  > <button >Buy Now</button></NavLink>  
          <br />  
          <br />
          <p>
            {/* <button onClick={() => dispatch(addAsync(product))}>Add to Cart</button> */}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Electronics;
