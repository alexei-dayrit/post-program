import '../styles.css'

const SearchBar = ({setSearchQuery}) => {
  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <input
        className="search-bar"
        placeholder='Enter a Product Name...'
        onChange={handleSearchQuery}
      />

    </div>
  )
}

export default SearchBar
