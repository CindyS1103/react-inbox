import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  messages: reducer
})

let middleware = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))
