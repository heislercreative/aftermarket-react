import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import productReducer from './productReducer'
import userReducer from './userReducer'
// import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  currentProduct: productReducer,
  user: userReducer,
  // cart: cartReducer
});

export default rootReducer
