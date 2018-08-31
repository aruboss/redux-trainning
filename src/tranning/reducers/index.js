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
		return state;
	}
	if(action.type==='SORT'){
		var {by, value} = action.sort;//by=action.sort.by
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

export default myReducer;