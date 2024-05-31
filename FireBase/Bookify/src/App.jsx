import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import SingIn from './pages/SingIn'
// import Navbar from './components/Navbar'
import Navbars from './components/Navbar'
import List from './pages/List'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return(
  <>
  <Navbars/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<SingIn/>}/>
    <Route path='/book/list' element={<List/>}/>
    <Route path='/book/view/:bookId' element={<Details/>}/>
  </Routes>
  </>
  )
}

export default App
