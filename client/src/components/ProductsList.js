import React from 'react'
import ProductBasic from '../components/ProductBasic'

const ProductsList = ({ products }) => {
  return(
    <div className='page-container'>
      {products.map(product =>
        <ProductBasic
          id={product.id}
          name={product.name}
          thumbnail={product.img_thumbnail}
          price={product.price}
        />
      )}
    </div>
  )
}

export default ProductsList
