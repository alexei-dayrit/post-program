import '../styles.css'

const SearchBar = ({handleFilter}) => {

  return (
    <div>
      <input
        className="search-bar"
        placeholder='Enter a Product Name...'
        onChange={handleFilter}
      />
    </div>
  )
}

export default SearchBar
