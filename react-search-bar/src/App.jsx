import { useState, useEffect } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import Products from './components/Products';

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([]);
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

  const handleFilter = event => {
    setSearchQuery(event.target.value);
    const query = event.target.value;
    const filter = products.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredProducts(filter);
  }

  return (
    <div>
      <h1 className="header">Search for products!</h1>
      <SearchBar setSearchQuery={setSearchQuery} handleFilter={handleFilter} />
      <Products products={products} searchQuery={searchQuery} filteredProducts={filteredProducts}/>
    </div>
  );
}

export default App;
