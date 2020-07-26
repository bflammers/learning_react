import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const reducer = combineReducers({
    counter: counterReducer, 
    result: resultReducer
})

const loggerMiddleware = store => next => action => {
    console.log('[Middleware] Dispatching ', action)
    const result = next(action)
    console.log('[Middleware] state: ', store.getState())
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware)))

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
