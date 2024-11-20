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

import React, { useState } from 'react'

const App = () => {
  const [time , setTime]=useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);
  return (
   <>
   <h1>{time}</h1>
   
   </>
  )
}

export default App

