import React from 'react'
import { decrement, increment,incrementByAmount,reset} from './features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
function App() {
  const [amount, setAmount] = useState()
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  const handleAmount = () => {
    dispatch(incrementByAmount(Number(amount)))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <div className="flex items-center space-x-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
            onClick={handleIncrement}
          >
            +
          </button>
          <p className="text-2xl">{count}</p>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" 
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
        <button 
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" 
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="mt-4">
          <input 
            type="text" 
            value={amount} 
            placeholder="Enter amount" 
            onChange={(e) => setAmount(e.target.value)} 
            className="border px-4 py-2 rounded mr-2"
          />
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" 
            onClick={handleAmount}
          >
            Inc By Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
