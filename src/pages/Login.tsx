import React from 'react';

export function Login() {
  return (
    <div className='bg-color-bg w-670 h-550 shadow-4xl flex flex-col justify-center items-center rounded-3xl'>
      <form className='flex gap-2.5 flex-col justify-center items-center'>
        <label htmlFor="Email">
          <p className='text-lg text-color-title font-bold'>Email</p> 
          <input
            name="email"
            type="email"
            placeholder='Enter your Email here'
            className='py-3.5 px-3.5 w-input-w rounded-3xl text-base  bg-color-input'
            required
          />
        </label>
        <label htmlFor="Password">
          <p className='text-lg text-color-title font-bold'>Password</p> 
          <input
            name="name"
            type="password"
            placeholder='Enter your Password here'
            className='py-3.5 px-3.5 w-input-w rounded-3xl text-base bg-color-input'
            required
          />
        </label>
        <button type="submit" className='rounded-full text-lg text-black font-bold bg-color-btn py-3.5 px-3.5 w-72 h-12 items-center mt-8 '>Login</button>
      </form>
    </div>
  );
}
