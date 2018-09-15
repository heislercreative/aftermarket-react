import React from 'react'
import RemoveFromCart from '../components/RemoveFromCart'

const ProductBasic = ({ id, name, thumbnail, price, page }) => {

  return (
    <div className='product-div'>
      { page === 'cart' && <RemoveFromCart productId={id}/> }
      <a className='product-link' href={`/products/${id}`}>
        <div>
          <img className='thumbnail-img' src={thumbnail} alt={name} />
          <h4>{name}</h4>
          <em>${price}</em>
        </div>
      </a>
    </div>
  )
}

export default ProductBasic
