// import translation from '../../context/ListContextFolder/translation';
// import LanguageContext from '../../context/LanaguageContext';
// import React from 'react'
export const DATA_LOADED = 'DATA LOADED';
const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATA';
export const RANDOM_LOADED ='RANDOM_LOADED';
// const lang = `${<LanguageContext.Consumer>{(value) => translation.language[value]}</LanguageContext.Consumer>}`


const api = `https://programming-quotes-api.herokuapp.com`

export const getQuotes = (page) => {
  return (dispatch) => {
    
    dispatch({type: START_LOADING_DATA});
    fetch(`${api}/quotes/page/${page}`)
    .then(res => res.json())
    .then(res=> {
      dispatch({type: DATA_LOADED, payload: res})
    })
    .catch(err => dispatch({type: ERROR_LOADING_DATA, error : err}))
  }
}

export const getRandomQuotes = () => {
  return async(dispatch) => {
    dispatch({type: START_LOADING_DATA});
    const data = await fetch(`${api}/quotes/random/lang/en`)
    console.log(data)
    const json = await data.json();
    const res = await dispatch({type: RANDOM_LOADED, payload: json})
    console.log(res)
  }
}

// export const getRandomQuotes = () => {
//   return (dispatch) => {
    
//     dispatch({type: START_LOADING_DATA});
//     fetch(`${api}/quotes/random`)
//     .then(res => res.json())
//     .then(res=> {
//       console.log(res)
//       dispatch({type: RANDOM_LOADED, payload: res})
//     })
//     .catch(err => dispatch({type: ERROR_LOADING_DATA, error : err}))
//   }
// }
