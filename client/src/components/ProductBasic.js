import React from 'react'
import { Link } from 'react-router-dom'
import RemoveFromCart from '../components/RemoveFromCart'

const ProductBasic = ({ id, name, thumbnail, price, page }) => {

  return (
    <div className='product-div'>
      { page === 'cart' && <RemoveFromCart productId={id}/> }
      <Link className='product-link' to={`/products/${id}`}>
        <div>
          <img className='thumbnail-img' src={thumbnail} alt={name} />
          <h4>{name}</h4>
          <em>${price}</em>
        </div>
      </Link>
    </div>
  )
}

export default ProductBasic
