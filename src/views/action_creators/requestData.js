import * as api from '../../models/mockApiEndPoint'

export const REQUEST_DATA = 'REQUEST_DATA';

export function requestData(){
    return (dispatch) => {
        dispatch({type: `${REQUEST_DATA}_PENDING`});
        api.getData()
            .then((res) => {
                dispatch({
                    type: `${REQUEST_DATA}_SUCCEEDED`,
                    // payload: res.body --> use in the reducer in charge of the list of sales / clients
                });
			})
            .catch((err) => {
                dispatch({
                    type: `${REQUEST_DATA}_FAILED`,
                    // payload: err.body --> use in the reducer in charge of the list of sales / clients
                })
            });
    }
}