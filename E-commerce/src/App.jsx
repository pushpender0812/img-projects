
import { Provider } from 'react-redux'
import './App.css'
import Footer from './Footer/Footer'
import Header from './Pages/Header/Header'
import { Outlet } from 'react-router-dom'
import { store } from './store/store'

function App() {


  return (
   <>
   <Provider store={store}>
    <Header/>
    <Outlet/>
    <Footer/>
    </Provider>
   </>
  )
}

export default App
