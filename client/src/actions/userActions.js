export function createUser() {
  return (dispatch) => {
      dispatch({ type: 'SIGNING_UP' })
      return fetch('/api/users', {
        method: 'POST',
        body: new FormData(document.getElementById("user-form")),
        credentials: 'same-origin'
      })
      .then(resp => loginOptions(resp, dispatch))
  }
}

export function updateUser(props) {
  return (dispatch) => {
    dispatch({ type: 'UPDATING_USER' })
    return fetch(`/api/users/${props.user.id}`, {
      method: 'POST',
      body: new FormData(document.getElementById("user-form")),
      credentials: 'same-origin'
    })
    .then(resp => loginOptions(resp, dispatch))
  }
}

export function loginUser() {
  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' })
    return fetch('/api/sessions', {
      method: 'POST',
      body: new FormData(document.getElementById("login-form")),
      credentials: 'same-origin'
    })
    .then(resp => loginOptions(resp, dispatch))
  }
}

function loginOptions(resp, dispatch) {
  if (resp.status === 201) {
    const user = resp.json()
    .then(user => dispatch({
      type: 'LOGIN_USER',
      payload: user
    }))
  } else {
    console.log('error')
  }
}

export function logoutUser() {
  return (dispatch) => {
    const user = {}
    dispatch({
      type: 'LOGOUT_USER',
      payload: user
    })
    .then(window.location = '/')
  }
}

export function addToCart() {
  return (dispatch) => {
      dispatch({ type: 'ADDING_ITEM' })
      return fetch('/api/cart_products', {
        method: 'POST',
        body: new FormData(document.getElementById("add-to-cart")),
        credentials: 'same-origin'
      })
      .then(resp => resp.json())
      .then(cart => dispatch({
        type: 'UPDATE_CART',
        payload: cart
      }))
  }
}

export function removeFromCart(props) {
  return (dispatch) => {
    dispatch({ type: 'REMOVING_ITEM' })
    return fetch(`/api/cart_products/${props.cartId}/${props.productId}`, {
      method: 'POST',
      body: new FormData(document.getElementById(`remove-from-cart-${props.productID}`)),
      credentials: 'same-origin'
    })
    .then(resp => resp.json())
    .then(cart => dispatch({
      type: 'UPDATE_CART',
      payload: cart
    }))
  }
}

export function checkoutCart(props) {
  return (dispatch) => {
    dispatch({ type: 'CHECKING_OUT' })
    return fetch(`/api/carts/${props.cartId}`, {
      method: 'POST',
      body: new FormData(document.getElementById("checkout-cart")),
      credentials: 'same-origin'
    })
    .then(resp => resp.json())
    .then(cart => dispatch({
      type: 'UPDATE_CART',
      payload: cart
    }))
  }
}
