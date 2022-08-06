import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Contact from './pages/Contact';
import Product from './pages/Product';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='app-pages'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductList />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/products/:id' element={<Product />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
