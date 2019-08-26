import { combineReducers } from 'redux'
import TeamReducer from './teams'

export default combineReducers({
  teams: TeamReducer
})
