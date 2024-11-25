import React from 'react'
import { useForm } from "react-hook-form";
const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues:{
      
        firstName:"vikas",
        lastName:"verma",
        Email:"vikasverma995619@gmail.com",
        city:"nepal"
      
    }
  });
  const submmithandler=(data)=>{
      console.log(data)
  }
  return (
   
    <div>
      <h1>form</h1>
      <form onSubmit={handleSubmit(submmithandler)} >
    <label>First Name</label>
      <input type='text' {...register("firstName",{ required: true })} />
      {errors.firstName && <p className="para" >Name is required</p>}
      <br/> <br/>
    <label>last Name</label>
      <input type='text' {...register("lastName",{required:true })} />
      {errors.lastName && <p className="para" >last name is required</p>}
      <br/> <br/>
    <label>Email</label>
      <input type='text' {...register("Email",{required:true })} />
      {errors.Email && <p className="para" >email is required</p>}
      <br/> <br/>
      <select{...register("city")}>
        <option value="">city</option>
        <option value="">bhopal</option>
        <option value="">nepal</option>
        <option value="">tazakistan</option>
      </select>
<button>Submit</button>
      </form>
    </div>
  )
}

export default App
