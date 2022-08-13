import { useState } from 'react';
import './styles.css';
import SearchBar from './components/SearchBar';
import Products from './components/Products';

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div>
      <h1 className="header">Search for products!</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Products searchQuery={searchQuery} />
    </div>
  );
}

export default App;
