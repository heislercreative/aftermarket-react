export function createUser() {
  return (dispatch) => {
      dispatch({ type: 'SENDING_SIGNUP' })
      return fetch('/api/users', {
        method: 'POST',
        body: new FormData(document.getElementById("user-form")),
        credentials: 'same-origin'
      })
      .then(resp => loginOptions(resp, dispatch))
  }
}

function loginOptions(resp, dispatch) {
  if (resp.status === 201) {
    const user = resp.json()
    .then(user => dispatch({
      type: 'CREATE_USER',
      payload: user
    }))
  } else {
    console.log('error')
  }
}
