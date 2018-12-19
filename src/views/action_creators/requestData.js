import * as api from '../../models/mockApiEndPoint'

export const REQUEST_DATA = 'REQUEST_DATA';

export function requestData(){
    return (dispatch) => {
        dispatch({type: `${REQUEST_DATA}_PENDING`});
        api.getData()
            .then((res) => {
                dispatch({
                    type: `${REQUEST_DATA}_SUCCEEDED`,
                    payload: res.body
                });
			})
            .catch((err) => {
                dispatch({
                    type: `${REQUEST_DATA}_FAILED`,
                    payload: err.body
                })
            });
    }
}