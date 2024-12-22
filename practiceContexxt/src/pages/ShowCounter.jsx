import React, { useContext } from 'react'
import { CounterContext } from '../context/context'


const ShowCounter = () => {
    const {count,increment} = useContext(CounterContext)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} > increment </button>
     
    </div>
  )
}

export default ShowCounter
