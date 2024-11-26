import React from 'react';
import { useForm } from "react-hook-form";
const App = () => {
  const { register, handleSubmit,watch, formState: { errors } } = useForm();
function onSubmit(data){
  console.log(data)

}
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Enter your name'
            {...register("username",{ required: "Name is required",
              minLength: { value: 3, message: 'Name must be at least 3 characters' },
              maxLength: { value: 20, message: 'Name must be less than 20  characters' }
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
            {errors.username && errors.username.type === 'required' && (
            <p className="text-red-900">{errors.username.message}</p>
          )}
          {errors.username && errors.username.type === 'minLength' && (
            <p className="text-blue-500">{errors.username.message}</p>
          )}
          {errors.username && errors.username.type === 'maxLength' && (
            <p className="text-red-900">{errors.username.message}</p>
          )}
         
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email'
            {...register("email",{required : "Email is Required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address"
              }
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
      
          {errors.email && errors.email.type ==='required'&& <p className='text-red-900' >{errors.email.message}</p>}
          {errors.email && errors.email.type ==='pattern' && <p className='text-blue-800' >{errors.email.message}</p>}
       
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder='Password'
            name="password"
            {...register("password",{ required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
              }
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && errors.password.type === "required" && <p className='text-red-600'>{errors.password.message}</p>}
          {errors.password && errors.password.type === "minLength" && <p className='text-red-950' >{errors.password.message}</p>}
          {errors.password && errors.password.type === "pattern" && <p className='text-blue-500' >{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
            Confirm Password:
          </label>
          <input
            type="password"

            placeholder='Confirm password'
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirm",{ required: "Please confirm password",
              validate: value =>
                value === watch('password') || "Passwords do not match"
            })}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirm && <p className='text-red-900'>{errors.confirm.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
