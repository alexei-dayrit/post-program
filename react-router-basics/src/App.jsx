import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Nav'
import Home from './pages/Home'
import Products from './pages/Products';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='app-pages'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
