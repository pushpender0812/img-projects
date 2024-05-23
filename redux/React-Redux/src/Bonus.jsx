import React, { useState } from 'react'
import { increment } from './slices/bonusSlice'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
  
 const points =  useSelector(state => state.bonus.points)
 const amount =  useSelector(state => state.account.amount)
  const dispatch = useDispatch()
  

  return (
    <div className='card'>
        <div className='container'>
            <h1>Bonus :{points}</h1>
            <h1>Amount :${amount}</h1>
            <button onClick={() => dispatch(increment())}>Increment +</button>
            
        </div>
      
    </div>
  )
}

export default Bonus

  

