import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.css'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(pReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();
