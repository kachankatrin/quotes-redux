import React from 'react';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {quoteReducer, ranQuoteReducer} from './reducers/quotesReducer';
import {compose} from 'redux';

const reducers = combineReducers({quotes: quoteReducer, ranQuotes:ranQuoteReducer});
const enhanceMiddleWare = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(reducers, enhanceMiddleWare)