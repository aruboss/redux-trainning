import {createStore} from 'redux';
import {status, store} from './actions/index';
import myReducer from './reducers/index';


const store = createStore(myReducer);
console.log('default: ',store.getState());
//thực hiện thay đổi status
store.dispatch(status());

console.log('TOGGLE_STATUS: ',store.getState());

//Thực hiện công việc sắp xếp tên từ Z-A
store.dispatch(({
	by: 'name',
	value: -1
}));
console.log('SORT: ',store.getState());