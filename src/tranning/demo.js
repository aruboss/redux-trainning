import {createStore} from 'redux';

var initialState = {
	status: false, //thay doi trang thai status
	sort: {
		by: 'name',
		value: 1
	}

}

var myReducer = (state = initialState,action) => {
	if(action.type==='TOGGLE_STATUS'){
		state.status = !state.status;
	}
	if(action.type==='SORT'){
		var {by, value} = action;//by=action.by
		var {status} = state;//status=state.status
		return {
			status: status,
			sort: {
				by: by,
				value: value
			}
		}
	}
	return state;
}

const store = createStore(myReducer);
console.log('default: ',store.getState());
//thực hiện thay đổi status
var action = {type: 'TOGGLE_STATUS'};
store.dispatch(action);

console.log('TOGGLE_STATUS: ',store.getState());

//Thực hiện công việc sắp xếp tên từ Z-A
var action = {
	type: 'SORT',
	sort: {
		by: 'name',
		value: -1
	}
}
store.dispatch(action);
console.log('SORT: ',store.getState());