import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
  const [task, settask] = useState("")
  const [todotask, settodotask] = useState([])
  const handleSubmit = (e)=>{
   e.preventDefault()
  
  
const todo={
  id:nanoid(),
  task:task
}
console.log(todo)


  settodotask([...todotask,todo])


  
  settask("")
  }

  const handledelete =(id)=>{
 const updaate= todotask.filter((todo)=> todo.id !==id)
 settodotask(updaate)
}
  return (
    <>
     <form onSubmit={handleSubmit} >
       <input onChange={(e)=>settask(e.target.value)} value={task} type="text"  placeholder='Enter task' />
       <button>Add task</button>
      
    
     </form>
     <ul>
  {todotask.map((todo) => (
    
    <li key={todo.id}>{todo.task} <button onClick={()=>{handledelete(todo.id)}} >Delete</button></li> 
  ))}
</ul>

     </>
  )
}

export default App