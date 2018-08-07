import React from 'react'
import RemoveFromCart from '../components/RemoveFromCart'

const ProductBasic = ({ id, name, thumbnail, price, page }) => {

  return (
    <a className='product-link' href={`/products/${id}`}>
      <div className='product-div'>
        <img className='thumbnail-img' src={thumbnail} alt={name} />
        <h4>{name}</h4>
        <em>${price}</em>
        { page === 'cart' && <RemoveFromCart productId={id}/> }
      </div>
    </a>
  )
}

export default ProductBasic
