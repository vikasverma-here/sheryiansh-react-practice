
// import React from 'react'
// import { useState } from 'react'
// import { nanoid } from 'nanoid'

// const App = () => {
//   const [text, settext] = useState("")
//    const [task, settask] = useState([])

//   // !!! this is the form handler function 

//   const submitHandler = (e)=>{
//  e.preventDefault()

//  if(text.trim()==="" ){
//   return;
//  }

//  const data= {
//   text:text,
//   id:nanoid()
//  }


//  settask([...task,data])
//  settext("")

//   }

// // !!! Delete feature is here 

//   const handlclick =(id)=>{
// const updatedTask = task.filter((task)=>task.id !==id)
// settask(updatedTask)
//   }

// // !!!! rendring ui is here 

// const uiRedring = task.length>0 ? task.map(({text,id})=>{
//   return <li className="list-decimal" key={id} > {text} <i className="ri-delete-bin-fill" onClick={()=>handlclick(id)}></i> </li>
//  }):(<h1>No task Pending </h1>)

//   return (
//     <div className='container p-10'>
//       <form className='form ' onSubmit={submitHandler} >
//         <input type="text" onChange={(e)=>settext(e.target.value)} value={text} placeholder='Enter task' />
//         <button>Add task</button>

//       </form>
//       <ol>

//         {uiRedring}
       
//       </ol>
      
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [text, settext] = useState('');
  const [task, settask] = useState([]);

  // !!! this is the form handler function
  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim() === '') return; // Prevent empty tasks

    const data = {
      text: text.trim(),
      id: nanoid(),
    };

    settask([...task, data]);
    settext('');
  };

  // !!! Delete feature is here
  const handlclick = (id) => {
    const updatedTask = task.filter((task) => task.id !== id);
    settask(updatedTask);
  };

  // !!!! Rendering UI is here
  const uiRendering =
    task.length > 0 ? (
      task.map(({ text, id }) => (
        <li
          className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm hover:bg-gray-200 transition duration-200"
          key={id}
         >
          <span>{text}</span>
          <i
            className="ri-delete-bin-fill text-red-500 cursor-pointer hover:text-red-600 transition duration-200"
            onClick={() => handlclick(id)}
          ></i>
        </li>
      ))
    ) : (
      <h1 className="text-center text-lg text-gray-500">No task pending</h1>
    );

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-md shadow-lg max-w-md">
      <form
        className="flex flex-col gap-4 mb-6"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => settext(e.target.value)}
          value={text}
          placeholder="Enter task"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ol className="space-y-3">
        {uiRendering}
      </ol>
    </div>
  );
};

export default App;
