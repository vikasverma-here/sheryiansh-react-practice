import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    navigate('/products');
  }
  return (
    <div>
    <form onSubmit={submit} >
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <input type="submit" value="Submit" />
      <button >submit</button>
    </form>
    </div>
  )
}

export default Home
