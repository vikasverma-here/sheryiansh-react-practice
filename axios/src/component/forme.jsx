import React from 'react'
import { getData as fetchData } from '../services/GetServices'
import { useEffect } from 'react'

const forme = () => {
    const newdata = async()=>{
        const res = await fetchData()
        console.log(res.data)
    }

    useEffect(()=>{newdata()},[])
  return (
    <div>
      
    </div>
  )
}

export default forme
