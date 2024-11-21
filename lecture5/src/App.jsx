// import React, { useState } from 'react';

// const App = () => {
//   const [status, setStatus] = useState("button clicked");

//   const handlclick = (msg) => {
//     setStatus(msg);
//   };

//   return (
//     <div>
//       <h1>{status}</h1>
//       <button onClick={() => handlclick("Button was clicked!")}>
//         Click Button
//       </button>
//     </div>
//   );
// };

// export default App;


// !!! part two on today class 

// import React, { useState } from 'react'

// const App = () => {
//   const [time , setTime]=useState(new Date().toLocaleTimeString())
//  let interval =  setInterval(() => {
//     setTime(new Date().toLocaleTimeString())
//   }, 1000);

//   const handleClick = ()=>{
// clearInterval(interval)
// console.log('clicked  ')

//   }
//   return (
//    <>
//    <h1>{time}</h1>
//    <button onClick={handleClick} >Stop Time</button>
//    </>
//   )
// }

// export default App

