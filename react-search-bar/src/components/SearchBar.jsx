import '../styles.css'

const SearchBar = ({testRef, handleFilter}) => {

  return (
    <div>
      <input
        className="search-bar"
        placeholder='Enter a Product Name...'
        onChange={handleFilter}
        ref={testRef}
      />
    </div>
  )
}

export default SearchBar
