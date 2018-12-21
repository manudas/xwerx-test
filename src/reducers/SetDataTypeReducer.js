import { SET_DATA_TYPE } from '../views/action_creators/setDataType'

const initialState = {
	dataType: 0
}

/**
 * Reducer used to response to the setDataType action
 * creator, so as to it can assign the requested datatype
 * @param {*} state 
 * @param {*} action 
 */
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