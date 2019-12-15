import { createStore, compose, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from './reducer'
// import storage from 'redux-persist/lib/storage'  localstorage机制
import storageSession from 'redux-persist/lib/storage/session' // sessionStorage机制
const persistConfig = {
  key: 'root',
  storage:storageSession,
  blacklist: [] // reducer 里不持久化的数据
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const myPersistReducer = persistReducer(persistConfig, reducers)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(thunk))
)
export default store
