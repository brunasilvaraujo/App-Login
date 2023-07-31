import React from 'react';

function User() {
  return (
    <div className='bg-color-bg w-670 h-550 shadow-4xl flex flex-col  rounded-3xl'>
      <header className='flex justify-items-start p-8'>
        <h3>
          User
        </h3> 
      </header> 
      <span className='w-670 border border-gray-300 drop-shadow-xl'></span> 
      <div className='flex justify-center items-center w-670 h-550'>
        <h1>Bem vindo</h1>
      </div> 
    </div>
  );
}

export default User;
