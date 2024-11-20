// import React from 'react'
// import Avator from './Avator'
// import Card from './Card'

// const App = () => {
//   return (
//     <div>
//       <Card>
//       <Avator 
//        size={100}
//        person={{ 
//          name: 'Katsuko Saruhashi',
//          region:'asia',
//          city:'bhopal'}}/>
//       </Card>
      
//     </div>
//   )
// }

// export default App


import React from 'react';
import Avatar from './Avatar';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card>
        {/* Pass Avatar as children */}
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            region: 'Asia',
            city: 'Bhopal',
          }}
        />
      </Card>
    </div>
  );
};

export default App;
