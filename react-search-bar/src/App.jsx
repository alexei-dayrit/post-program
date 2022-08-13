import { useState, useEffect } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        await setProducts(data.products);
      } catch(err) {
        console.errror(err);
      }
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <h1 className="header">Search for products!</h1>
      <SearchBar />
    </div>
  );
}

export default App;
