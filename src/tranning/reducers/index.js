import statusReducer from './statusReducer'  //reducer status
import sortReducer from './sortReducer'  //reducer sort
import { combineReducers } from 'redux'

const myReducer = combineReducers({
	status: statusReducer,
	sort: sortReducer
})

export default myReducer;