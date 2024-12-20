import React, { useContext } from 'react';
import { data } from '../App';

const Child3 = () => {
  const [mydata,setmydata] = useContext(data);

  return (
    <div>
      <h1>Displaying Context Data</h1>
      <p>{mydata}</p>
    </div>
  );
};

export default Child3;
