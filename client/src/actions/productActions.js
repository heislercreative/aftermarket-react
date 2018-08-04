export function fetchProducts() {
    return (dispatch) => {
      dispatch({ type: 'LOADING_PRODUCTS' })
      return fetch('/api/products')
        .then(resp => resp.json())
        .then(products => dispatch({ type: 'FETCH_PRODUCTS', payload: products }))
    }
}
