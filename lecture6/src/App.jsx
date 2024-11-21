import React, { useState } from 'react'

const App = () => {

  const [value, setvalue] = useState('')
  function handlesubmit(){
    e.preventDefault()
    console.log(value)
  }
  return (
  
        
  <form onSubmit={handlesubmit} >

  <input type="text" placeholder='fullname' onChange={(e)=>{setvalue(e.target.value)}}  value={value} />
  <input type="text" placeholder='fullname'onChange={(e)=>{setvalue(e.target.value)}} value={value} />
<button > submit</button>
  </form>
  
  
  )
}

export default App












// import React from 'react'

// const App = () => {

//   function handleclick(e){
// e.preventDefault()
// const {fullname,username}=e.target;
// const data ={
//   fullname:e.target.value,
//   username:e.target.value
// }
// console.log(data)
// console.log("clicked")
//   }
//   return (
//     <div >
//      <form onSubmit={handleclick}>
//       <input type="text" placeholder='enter fullname ' name='fullname' />
//       <input type="text" placeholder=' username ' name='username' />
// <button  > submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


// !!!two way binding 


