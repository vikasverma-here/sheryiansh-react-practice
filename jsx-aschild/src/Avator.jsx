// import React from 'react'

// const Avator = ({person,size}) => {
//   return (
//     <div>
//       <p>{person.name}</p>
//       <p>{person.region}</p>
//       <p>{person.city}</p>
//       <p>{person.size}</p>
//     </div>
//   )
// }

// export default Avator


import React from 'react';

const Avatar = ({ person, size }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Display Person Details */}
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Region:</strong> {person.region}</p>
      <p><strong>City:</strong> {person.city}</p>
      <p><strong>Size:</strong> {size}px</p>
    </div>
  );
};

export default Avatar;
