import { FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAILED, SELECT_ALL } from './actions'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      return action.payload
    case FETCH_MESSAGES_FAILED:
      return action.payload
    case SELECT_ALL:
       state.map(message => message ? message === true : message)
        return [...state]
    default:
        return state
      }
    }
