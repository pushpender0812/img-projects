import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import All from './Pages/All.jsx'
import Men from './Pages/Men.jsx'
import Women from './Pages/Women.jsx'
import Jwellery from './Pages/Jwellery.jsx'
import Electronics from './Pages/Electronics.jsx'
import Cart from './Pages/cart/Cart.jsx'
import Buy from './Pages/Buy.jsx'
import Address from './Pages/Address.jsx'
import Payments from './Pages/Payments.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<All/>}/>
      <Route path='men' element={<Men/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='jwellery' element={<Jwellery/>}/>
      <Route path='electronics' element={<Electronics/>}/>
      <Route path='/product/:id' element={<Buy/>}/>
      <Route path='/product/:id/address' element={<Address/>}/>
      <Route path='/product/payment' element={<Payments/>}/>
      <Route path='cart' element={<Cart/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
