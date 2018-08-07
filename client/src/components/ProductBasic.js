import React from 'react'

const ProductBasic = ({ id, name, thumbnail, price }) => {
  return (
    <a className='product-link' href={`/products/${id}`}>
      <div className='product-div'>
        <img className='thumbnail-img' src={thumbnail} alt={name} />
        <h4>{name}</h4>
        <em>${price}</em>
      </div>
    </a>
  )
}

export default ProductBasic
