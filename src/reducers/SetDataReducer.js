import { REQUEST_DATA } from '../views/action_creators/requestData'

const initialState = {
	isLoading: false
}

export default function SetDataReducer(state = initialState, action) {
	switch (action.type) {
		case `${REQUEST_DATA}_PENDING`:
			return Object.assign({}, state, {
				data: {}
			});
			break // no need of break after return, deleting nexts
		case `${REQUEST_DATA}_SUCCEEDED`:
			return Object.assign({}, state, {
				data: JSON.parse(action.payload)
			});
		case `${REQUEST_DATA}_FAILED`:
			return Object.assign({}, state, {
				data: action.payload
			});
		default:
			return state
	}
}