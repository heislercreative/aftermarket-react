import React from 'react'
import ProductBasic from '../components/ProductBasic'

const ProductsList = ({ products }) => {
  return(
    <div className='page-container'>
      {products.map(product =>
        <ProductBasic
          key={product.id}
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
