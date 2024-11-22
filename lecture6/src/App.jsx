
// !!!!!!one way binding is here ============================>

// import React from 'react'

// const App = () => {

//   function handleclick(e){
// e.preventDefault()
// const fullname = e.target.elements.fullname.value;
//     const username = e.target.elements.username.value;

//     console.log(e.target[1].value)
    
// const data ={
//   fullname:fullname,
//   username:username
// }
// console.log(data)
// console.log("clicked")
//   }
//   return (
// //     <div >
// //      <form onSubmit={handleclick}>
// //       <input type="text" placeholder='enter fullname ' name='fullname' />
// //       <input type="text" placeholder=' username ' name='username' />
// // <button  > submit</button>
// //       </form>
// //     </div>

// // !!! with styling ================>
//   <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <form
//     onSubmit={handleclick}
//     className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
//   >
//     <div className="mb-4">
//       <label
//         htmlFor="fullname"
//         className="block text-gray-700 text-sm font-bold mb-2"
//       >
//         Fullname
//       </label>
//       <input
//         type="text"
//         id="fullname"
//         name="fullname"
//         placeholder="Enter fullname"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//     </div>
//     <div className="mb-4">
//       <label
//         htmlFor="username"
//         className="block text-gray-700 text-sm font-bold mb-2"
//       >
//         Username
//       </label>
//       <input
//         type="text"
//         id="username"
//         name="username"
//         placeholder="Enter username"
//         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//       />
//     </div>
//     <button
//       type="submit"
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//     >
//       Submit
//     </button>
//   </form>
// </div>

//   )
// }

// export default App





// !!!!! two wau binding is here ===========================>


//   import React from 'react'
//   import { useState } from 'react'
//   const App = () => {
    
//     const [value, setvalue] = useState('')
//     const [username, setUsername] = useState('');

//     const handleSubmit = (e)=>{
//      e.preventDefault()
// console.log(value)
// console.log(username)
//     }

//     return (
//       <div>
//         <form action="" onSubmit={handleSubmit} >
//           <input type="text" placeholder='enter fullname ' onChange={(e)=>{setvalue(e.target.value)}}/>
//           <input type="text" placeholder='enter username ' onChange={(e)=>{setUsername(e.target.value)}}/>
//           <button>submit</button>
         
//         </form>
//       </div>
//     )
//   }
  
//   export default App
  


// !!!! two way binding using one usestate ================>
  import React from 'react'
import { useState } from 'react'
const App = () => {
  
  const [formdata, setFormdata] = useState({
    fullname:"",
    username:""
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e)=>{

        e.preventDefault();
            console.log("Form Data Submitted:", formdata);
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
      <input type="text" placeholder="Enter fullname" name="fullname" value={formdata.fullname} onChange={handleChange} />
<input type="text" placeholder="Enter username" name="username" value={formdata.username} onChange={handleChange} />

        <button>submit</button>
       
      </form>
    </div>
  )
}

export default App











