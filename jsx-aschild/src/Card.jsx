// import React from 'react'

// const Card = ({children}) => {
//   return (
//     <div>
//       <h1>passing jsax as a child </h1>
//       {children}
      
//     </div>
//   )
// }

// export default Card

import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h1>Passing JSX as a child</h1>
      {/* Render children here */}
      {children}
    </div>
  );
};

export default Card;
