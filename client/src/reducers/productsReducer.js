export default function productsReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_PRODUCTS':
      return action.payload

    default:
      return state
  }
}
