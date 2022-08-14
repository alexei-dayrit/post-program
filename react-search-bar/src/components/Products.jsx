import '../styles.css'

const Product = ({ products, searchQuery, filteredProducts }) => {
  return (
    <div className='container'>
      <ul className='product-list'>
        {searchQuery === ''
          ? products.map(item => (
            <li key={item.id} className='product-item'>
              <img src={item.images[0]} alt='Product Item' />
              <h1 className='product-title'>{item.title}</h1>
            </li>
          ))
          : filteredProducts.map(item => {
            return <li key={item.id} className='product-item'>
              <img src={item.images[0]} alt='Product Item' />
              <h1 className='product-title'>{item.title}</h1>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Product
