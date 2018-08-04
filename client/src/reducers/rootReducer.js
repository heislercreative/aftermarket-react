import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
// import authReducer from './authReducer'
// import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  products: productsReducer,
  // auth: authReducer,
  // cart: cartReducer
});

export default rootReducer
