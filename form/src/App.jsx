import React, { useState } from 'react'

const App = () => {
const [name , setName]=useState('')
const [password, setpassword] = useState('')
const [email, setemail] = useState("")
const [number, setnumber] = useState()
const [url, seturl] = useState("")
const [date, setdate] = useState("")


const data={
    name,
    password,
    email,
    number,
    url,
    date
}

const submitHandler=(e)=>{
    e.preventDefault()
    console.log(data)
}
  return (
    
      <form onSubmit={submitHandler} >
            <div>
                <label htmlFor="text">Text:</label>
                <input type="text" id="text" name="text" onChange={(e)=>{setName(e.target.value)}} />
                
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={(e)=>{setpassword(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={(e)=>{setemail(e.target.value)}} />
            </div>
          
            <div>
                <label htmlFor="tel">Phone:</label>
                <input type="tel" id="tel" name="tel" onChange={(e)=>{setnumber(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="url">URL:</label>
                <input type="url" id="url" name="url" onChange={(e)=>{seturl(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" onChange={(e)=>{setdate(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="datetime-local">Date and Time:</label>
                <input type="datetime-local" id="datetime-local" name="datetime-local" />
            </div>
            <div>
                <label htmlFor="month">Month:</label>
                <input type="month" id="month" name="month" />
            </div>
            <div>
                <label htmlFor="week">Week:</label>
                <input type="week" id="week" name="week" />
            </div>
            <div>
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" />
            </div>
            <div>
                <label htmlFor="checkbox">Checkbox:</label>
                <input type="checkbox" id="checkbox" name="checkbox" />
            </div>
            <div>
                <label htmlFor="radio">Radio:</label>
                <input type="radio" id="radio" name="radio" />
            </div>
            <div>
                <label htmlFor="file">File:</label>
                <input type="file" id="file" name="file" />
            </div>
            <div>
                <label htmlFor="color">Color:</label>
                <input type="color" id="color" name="color" />
            </div>
            <div>
                <label htmlFor="range">Range:</label>
                <input type="range" id="range" name="range" />
            </div>
            <div>
                <label htmlFor="search">Search:</label>
                <input type="search" id="search" name="search" />
            </div>
            <div>
                <label htmlFor="hidden">Hidden:</label>
                <input type="hidden" id="hidden" name="hidden" />
            </div>
            <div>
                <label htmlFor="button">Button:</label>
                <input type="button" id="button" name="button" value="Click Me" />
            </div>
            <div>
                <label htmlFor="submit">Submit:</label>
                <input type="submit" id="submit" name="submit" value="Submit" />
            </div>
            <div>
                <label htmlFor="reset">Reset:</label>
                <input type="reset" id="reset" name="reset" value="Reset" />
            </div>
      </form>
    
  )
}

export default App
