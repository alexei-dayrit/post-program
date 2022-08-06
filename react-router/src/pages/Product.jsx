import React from 'react';
import { useParams } from 'react-router-dom'
import NotFound from './NotFound';

const Product = () => {
  let { id } = useParams()
  id = Number(id)
  if (id < 3) {
    return (
      <h1 style={{ color: 'green' }}>
        Product {id}
      </h1>
    )
  }

  return (
    <NotFound />
  )
}

export default Product
