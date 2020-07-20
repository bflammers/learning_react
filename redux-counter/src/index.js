import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const reducer = combineReducers({
    counter: counterReducer, 
    result: resultReducer
})

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
