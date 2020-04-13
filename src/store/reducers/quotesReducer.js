import {DATA_LOADED, ERROR_LOADING_DATA, RANDOM_LOADED} from '../actions/QuoteAction';

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
  if(action.type === RANDOM_LOADED) {
    console.log(action.payload)
    return {...initialState, ranQuote: action.payload}
  }
  return initialState;
}

// export const randomReducer = (initialState={randomQuote: []}, action) => {
//       if(action.type === RANDOM_LOADED) {
//         console.log(action.payload)
//         return {
//           ...initialState, 
//           randomQuote: action.payload
//         }
//       }
//       return initialState
//     }

// import {LOADED_ALL_QUOTES, ERROR_LOADING_DATA, LOAD_RANDOM_QUOTE} from '../actions/QuoteAction';

// const initStore = {
//     allQuotes: [],
//     error: null,
//     randomQuote: ''
//   }


//   export const randomReducer = (initialState={randomQuote: ''}, action) => {
//     if(action.type === LOAD_RANDOM_QUOTE) {
//       console.log(action.payload)
//       return {
//         ...initialState, 
//         randomQuote: action.payload
//       }
//     }
//     return initialState
//   }