import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/hiteshchoudhary')
      .then(response => response.json())
      .then(data => {
           setData(data)
      })
    },[])
  return (
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-4xl'>
      Github Followers : {data.followers}
    </div>
  )
}
