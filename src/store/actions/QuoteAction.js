export const DATA_LOADED = 'DATA LOADED';
const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATA';
export const POST_CREATED ='POST CREATED'

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
    const data = await fetch(`${api}/quotes/random`)
    const json = await data.json();
    const res = await dispatch({type: DATA_LOADED, payload: json})
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
//       dispatch({type: DATA_LOADED, payload: res})
//     })
//     .catch(err => dispatch({type: ERROR_LOADING_DATA, error : err}))
//   }
// }