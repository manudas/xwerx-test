import { requestData, REQUEST_DATA } from '../views/action_creators/requestData'

const initialState = {
	isLoading: false
}

export default function requestDataEndPoint(state = initialState, action) {
	switch (action.type) {
		case `${REQUEST_DATA}_PENDING`:
			return Object.assign({}, state, {
				isLoading: true
			});
			break
		case `${REQUEST_DATA}_SUCCEEDED`:
			return Object.assign({}, state, {
				isLoading: false
			});
			break
		case `${REQUEST_DATA}_FAILED`:
			return Object.assign({}, state, {
				isLoading: false
			});
			break
		default:
			return state
	}
}