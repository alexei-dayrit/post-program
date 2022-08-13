import { useState } from 'react'
import './styles.css';
import SearchBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([])

  return (
    <div>
      <h1 className="header">Search for products!</h1>
      <SearchBar />
    </div>
  );
}

export default App;
