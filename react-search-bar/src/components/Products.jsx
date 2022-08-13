import React, { useState, useEffect} from 'react'
import '../styles.css'

const Product = ({searchQuery}) => {

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
        {products.filter(item => {
          const filteredQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase());
          return filteredQuery;
        })
        .map(item => (
          <li key={item.id} className='product-item'>
            <img src={item.images[0]} alt='Product Item' />
            <h1 className='product-title'>{item.title}</h1>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product
