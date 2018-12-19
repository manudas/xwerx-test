import { SET_DATA_TYPE } from '../views/action_creators/setDataType'

const initialState = {
	dataType: 0
}

export default function SetDataReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DATA_TYPE:
			return Object.assign({}, state, {
				dataType: action.dataType
			});
		default:
			return state
	}
}