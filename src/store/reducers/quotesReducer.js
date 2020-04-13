import {DATA_LOADED, ERROR_LOADING_DATA} from '../actions/QuoteAction';

const initStore = {
  quote: [],
  ranQuote: [],
  error: null
}
export const quoteReducer = (initialState = initStore, action) => {
  if(action.type === DATA_LOADED) {
    console.log(action.payload)
    return {...initialState, quote: action.payload}
  }
  if(action.type === ERROR_LOADING_DATA) {
    return {...initialState, error: action.payload}
  }
  return initialState;
}

export const ranQuoteReducer = (initialState = initStore, action) => {
  if(action.type === DATA_LOADED) {
    console.log(action.payload)
    return {...initialState, ranQuote: action.payload}
  }
  if(action.type === ERROR_LOADING_DATA) {
    return {...initialState, error: action.payload}
  }
  return initialState;
}

