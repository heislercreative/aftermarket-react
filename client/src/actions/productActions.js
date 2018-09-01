export function fetchProducts() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' })
      return fetch('/api/products')
        .then(resp => resp.json())
        .then(products => dispatch({
          type: 'FETCH_PRODUCTS',
          payload: products
        }))
    }
}

export function fetchProduct(props) {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCT' })
      return fetch(`/api/products/${props.productId}`)
        .then(resp => resp.json())
        .then(product => dispatch({
          type: 'FETCH_PRODUCT',
          payload: product
        }))
    }
}

export function cleanupProduct() {
  return (dispatch) => {
    const product = {}
    dispatch({
      type: 'CLEANUP_PRODUCT',
      payload: product
    })
  }
}
