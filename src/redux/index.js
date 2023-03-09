import {combineReducers} from 'redux';
import {userreducer} from './productReducer'

const reducer = combineReducers({
  getUsers:userreducer
})

export default reducer