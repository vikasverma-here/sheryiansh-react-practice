import React, { useContext } from 'react'
import { CounterContext } from '../context/context'

function Decrement() {
    const {decrement}=useContext(CounterContext)
  return (
    <div>
      <button onClick={decrement} >decrement</button>
    </div>
  )
}

export default Decrement
