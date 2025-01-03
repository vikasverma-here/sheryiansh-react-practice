import React from 'react'

const App = () => {
  const {data}=useSelector(state=>state.product)
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default App
