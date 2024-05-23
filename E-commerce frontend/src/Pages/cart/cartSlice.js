import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchcartItem, addcartItem, deletecartItem, updateQuantity } from "./cartApi";

// localStorage.setItem("cartItems",JSON.stringify(state.items.map((item) => item)))

//   const localItems = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = {
  items: (() => {
    try {
      const cartItems = localStorage.getItem("cartItems");
      return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
      console.error("Error fetching cart items from local storage", error);
      return [];
    }
  })(),
  status: "idle",
};

export const fetchAsync = createAsyncThunk("cart/fetchcartItem", async () => {
  const response = await fetchcartItem();
  // console.log(response);
  return response.data;
});

export const addAsync = createAsyncThunk("cart/addcartItem", async (item) => {
  const { id, title, price, description, image, rating } = item;

  const response = await addcartItem({
    id,
    title,
    price,
    description,
    image,
    rating,
    quantity: item.quantity || 1,
  });
  // setItems(items)
  window.location.reload();
  alert("Product added to cart successfully");
  console.log("Added to caart successfully");

  return response.data;
});

export const deleteAsync = createAsyncThunk(
  "cart/deletecartItem",
  async (id) => {
    await deletecartItem(id);
    window.location.reload();
    console.log("Deleted Success");
    alert("Product Successfully Deleted From Cart");
    return response.data;
  }
);

export const increaseQuantity = createAsyncThunk(
  "cart/increaseQuantity",
  async(id) => {
    await updateQuantity(id,1);
    return id;
  }
)



export const decreaseQuantity = createAsyncThunk(
  "cart/decreaseQuantity",
  async(id) => {
    await updateQuantity(id,-1);
    return id;
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
        
        // console.log(items);

        // console.log(state.items);
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
        // setItems(items)
        // console.log(state.items);
        const existingItem = state.items.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.items.push(newItem);
        }
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      })
      .addCase(increaseQuantity.fulfilled,(state,action) => {
            const item = state.items.find((item) => item.id === action.payload)
            if (item) {
              item.quantity += 1;
            }
      })
      .addCase(decreaseQuantity.fulfilled,(state,action) => {
        const item = state.items.find((item) => item.id === action.payload)
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        } else if (item && item.quantity === 1) {
          alert("Product Quantity Cannot be 0 or Negative ")
          // state.items = state.items.filter((item) => item.id !== action.payload);
        }
      })
  },
})

export default cartSlice.reducer;
