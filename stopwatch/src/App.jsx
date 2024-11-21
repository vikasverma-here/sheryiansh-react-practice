import React, { useState } from 'react'

const App = () => {
const [time, settime]=useState(55) 
const [runnig,setrunnig]=useState(false)
const [intervalId, setIntervalId] = useState(null);
const startStop =()=>{
 if(runnig){
  clearInterval(intervalId)
  setrunnig(false)
 }
  else{
    const id = setInterval(() => {
      settime((pre)=>pre+1)
        }, 1000);
        setIntervalId(id)
        setrunnig(true)
  }

}
const reset = ()=>{
  
    clearInterval(intervalId);
    setrunnig(false);
    settime(0);

}

const formatTime= (timeinSec)=>{
  const minute = Math.floor(timeinSec/60)
  const sec = timeinSec%60;
  return `${minute < 10 ? "0" : ""}${minute}:${sec < 10 ? "0" : ""}${sec}`;
}

  return (
    <div  >
      
      <p>{formatTime(time)}</p>
      <button onClick={startStop} >{runnig?'Stop':'Start'}</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}

export default App
