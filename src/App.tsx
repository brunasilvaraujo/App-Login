import React from 'react';
import User from './pages/User';
import CreateAccount from './pages/CreateAccount';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Login } from './pages/Login';

function App() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={ <CreateAccount/> } />
        <Route path='/user' element={ <User /> } />
      </Routes>      
    </div>
  );
}

export default App;
