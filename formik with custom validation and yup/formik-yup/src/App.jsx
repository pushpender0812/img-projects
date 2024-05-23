import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './Registration'
import MultiRegisForm from './MultiRegisForm'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
{/* <Registration/> */}
<MultiRegisForm/>
</>
  )
}

export default App
