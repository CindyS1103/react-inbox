import axios from 'axios'


export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS'
export const FETCH_MESSAGES_FAILED = 'FETCH_MESSAGES_FAILED'
export const SELECT_ALL = 'SELECT_ALL'


export const fetchMessages = () => {
  return async dispatch => {
    try {
      let response = await axios.get('http://localhost:8082/api/messages')
      let messages = response.data
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: messages
      })
    } catch (err) {
      dispatch({
        type: FETCH_MESSAGES_FAILED,
        payload: err
      })
    }
  }
}

export const selectAll = (messages) => {
  return dispatch => {
    dispatch({
      type: SELECT_ALL,
      payload: messages
    })
  }
}
