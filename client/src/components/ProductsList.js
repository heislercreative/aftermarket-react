import React from 'react'
import ProductBasic from '../components/ProductBasic'

const ProductsList = ({ products, page }) => {

  return(
    <div className='page-container'>
      {products.map(product =>
        <ProductBasic
          key={product.id}
          id={product.id}
          name={product.name}
          thumbnail={product.img_thumbnail}
          price={product.price}
          page={page}
        />
      )}
    </div>
  )
}

export default ProductsList
