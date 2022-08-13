import React, { useState, useEffect} from 'react'
import '../styles.css'

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=100');
        const data = await response.json();
        await setProducts(data.products);
      } catch (err) {
        console.errror(err);
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className='container'>
      <ul className='product-list'>
        {products.map(product => (
          <li key={product.id} className='product-item'>
            <img src={product.images[0]} alt='Product Item'/>
            <h1>{product.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
