import React, { useState } from 'react'
import { increment } from './reducers/reward'
import { useDispatch, useSelector } from 'react-redux'

function Reward() {

 const points =  useSelector(state => state.reward.points)
  const dispatch = useDispatch()
  

  return (
    <div className='card'>
        <div className='container'>
            <b>Reward Component</b>
            <h1>Bonus :{points}</h1>
            
            <button onClick={() => dispatch(increment())}>Increment +</button>
            
        </div>
      
    </div>
  )
}

export default Reward

  

