import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

interface IFormInput {
  name: string,
  email: string,
  password: string
}

function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className='bg-color-bg w-670 h-550 shadow-4xl flex flex-col justify-center items-center rounded-3xl'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex gap-2.5 flex-col justify-center items-center'>
        <label htmlFor="Nome">
          <p className='text-lg text-color-title font-bold'>FullName</p> 
          <input
            {...register('name', { required: true })}
            aria-invalid={errors.name ? 'true' : 'false'}
            type="name"
            placeholder='Enter your Name here'
            className='py-3.5 px-3.5 w-input-w rounded-3xl text-base  bg-color-input'
          />
          {errors.name?.type === 'required' && (
            <p role='alert'>First name is required</p>
          )}
        </label>
        <label htmlFor="Email">
          <p className='text-lg text-color-title font-bold'>Email</p> 
          <input
            {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
            aria-invalid={errors.email ? 'true' : 'false'}
            type="email"
            placeholder='Enter your Email here'
            className='py-3.5 px-3.5 w-input-w rounded-3xl text-base  bg-color-input'
            required
          />
          {errors.email?.type === 'required' && (
            <p  role='alert'>First email is required</p>
          )}
        </label>
        <label htmlFor="Password">
          <p className='text-lg text-color-title font-bold'>Password</p> 
          <input
            {...register('password', { required: true, minLength: 6 })}
            aria-invalid={errors.password ? 'true' : 'false'}
            type="password"
            placeholder='Enter your Password here'
            className='py-3.5 px-3.5 w-input-w rounded-3xl text-base bg-color-input'
            required
          />
          {errors.password?.type === 'required' && (
            <p role='alert'>First password is required</p>
          )}
        </label>
        <button type="submit" className='rounded-full text-lg text-black font-normal bg-color-btn py-3.5 px-3.5 w-72 h-12 items-center mt-8 shrink-0'>Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;