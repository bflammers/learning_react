
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { burgerReducer, authReducer, ordersReducer } from './reducers/index'

const logger = store => next => action => {
  console.log('will dispatch', action)

  // Call the next dispatch method in the middleware chain.
  const returnValue = next(action)

  console.log('state after dispatch', store.getState())

  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
  return returnValue
}

const reducer = combineReducers({
  burger: burgerReducer,
  auth: authReducer, 
  orders: ordersReducer
})

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store
