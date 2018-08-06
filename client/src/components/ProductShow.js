import React from 'react'
import { connect } from 'react-redux'

const ProductShow = ({ productId }) => {
  return (
    <div className='product-div'>
      <h3>Test #{productId}</h3>

      <em>$so</em>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.user.id,
    productId: ownProps.match.params.productId
  }
}

export default connect(mapStateToProps)(ProductShow)
