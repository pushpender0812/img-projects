

// export function fetchcartItem(){
//   return  axios.get('http://localhost:8080/cart')
 
// }

  export function fetchcartItem() {
    // try {
    //   const cartItems = localStorage.getItem('cartItems');  
    //   console.log('Retrieved cart items:', cartItems);
    //   // console.log(cartItems);
    //   return cartItems.length !== 0 ? JSON.parse(cartItems) : [];
    // } catch (error) {
    //   console.error("Error fetching cart items from local storage", error);
    //   return [];
    // }
    return JSON.parse(localStorage.getItem('cartItems'))
  }


  // export function addcartItem(item){
  //     return axios.post('http://localhost:8080/cart',item)

    
  // }

  export function addcartItem(item) {
    try {
      const cartItems = localStorage.getItem('cartItems');
      const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];
      
      const existingItemIndex = parsedCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        
        parsedCartItems[existingItemIndex].quantity += item.quantity;
      } else {
        
        parsedCartItems.push(item);
      }

      localStorage.setItem('cartItems', JSON.stringify(parsedCartItems));
      // console.log('Saved cart items:', localStorage.getItem('cartItems'));
    } catch (error) {
      console.error("Error adding cart item to local storage", error);
    }
    
  }



  export function deletecartItem(id){
    const cartItem =  JSON.parse(localStorage.getItem('cartItems'))
    const  updatedcartItems = cartItem.filter((item) => item.id !== id)
    localStorage.setItem('cartItems', JSON.stringify(updatedcartItems));
    return id;
    
  }

  export function updateQuantity(id,quantityChange){
     const cartItems = JSON.parse(localStorage.getItem('cartItems'))

    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {...item, quantity:item.quantity + quantityChange}
      }
      return item
     })
    localStorage.setItem('cartItems',JSON.stringify(updatedCartItems))
    return updatedCartItems
  }

// import { createSlice } from "@reduxjs/toolkit";

// const cartUiSlice = createSlice({
//   name: "cartUi",
//   initialState: { cartIsVisible: false },

//   reducers: {
//     toggle(state) {
//       state.cartIsVisible = !state.cartIsVisible;
//     },
//   },
// });

// export const cartUiActions = cartUiSlice.actions;
// export default cartUiSlice;