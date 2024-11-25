
import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();


  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            name="text"
            {...register("text", { required: true })} 
          />
          {errors.text && <p className="para" >Text is required</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: true })} 
          />
          {errors.password && <p className="para" >Password is required</p>}
        </div>
        <div>
          <label htmlFor="submit">Submit:</label>
          <input type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default App;

