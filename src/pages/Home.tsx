import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className='bg-color-bg w-670 h-550 shadow-4xl flex flex-col justify-center items-center rounded-3xl relative'>
      <div className='arrow-container'>
        <Link to={'/login'}>
          <h2 className='text-color-title text-center text-2xl mb-5'>Sing In</h2>
        </Link>
        <div className='line'></div>
        <div className='arrow'></div>
      </div>
      <div className='arrow-container'>
        <Link to={'/create'}>
          <h2 className='text-color-title text-center text-2xl'>Create Account</h2>
        </Link>
        <div className='line2'></div>
        <div className='arrow2'></div>
      </div>
    </div>
  );
}

export default Home;