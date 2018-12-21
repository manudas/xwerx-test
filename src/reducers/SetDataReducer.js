import { REQUEST_DATA } from '../views/action_creators/requestData'

const initialState = {
	data: {}
}

/**
 * Reducer used to process the received data from
 * the api and to make it available for the needing components 
 * @param {*} state 
 * @param {*} action 
 */
export default function SetDataReducer(state = initialState, action) {
	switch (action.type) {
		case `${REQUEST_DATA}_PENDING`:
			return Object.assign({}, state, {
				data: {}
			});
			break // no need of break after return, deleting nexts
		case `${REQUEST_DATA}_SUCCEEDED`:
			return Object.assign({}, state, {
				data: JSON.parse(action.payload).data
			});
		case `${REQUEST_DATA}_FAILED`:
			return Object.assign({}, state, {
				data: action.payload
			});
		default:
			return state
	}
}