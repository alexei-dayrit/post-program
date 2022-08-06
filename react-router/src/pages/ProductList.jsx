import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='product-list'>
      <h1>Product List</h1>
      <Link to='/products/1' className='product-links'>Product 1</Link>
      <br/>
      <Link to='/products/2' className='product-links'>Product 2</Link>
      <br/>
      <Link to='/products/new' className='product-links'>New Product</Link>
    </div>
  )
}

export default ProductList
