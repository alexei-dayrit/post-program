import './styles.css';
import SearchBar from './components/SearchBar';
import Product from './components/Product';

function App() {

  return (
    <div>
      <h1 className="header">Search for products!</h1>
      <SearchBar />
      <Product />
    </div>
  );
}

export default App;
