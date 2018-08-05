export function createUser() {
  return (dispatch) => {
      dispatch({ type: 'SENDING_SIGNUP' })
      return fetch('/api/users', {
        method: 'POST',
        body: new FormData(document.getElementById("user-form")),
        credentials: 'same-origin'
      })
      .then(resp => resp.json())
      .then(user => dispatch({
        type: 'CREATE_USER',
        payload: user
      }))
  }
}
