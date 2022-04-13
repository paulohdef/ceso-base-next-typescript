import { combineReducers } from 'redux'
import requerimentReducer from './requeriments'

const rootReducer = combineReducers({
  requeriment: requerimentReducer,
})

export default rootReducer
