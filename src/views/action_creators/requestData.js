import * as api from '../../models/mockApiEndPoint'

export const REQUEST_DATA = 'REQUEST_DATA';

/**
 * Action creator used to request data to an API endpoint
 */
export function requestData(){
    return (dispatch) => {
        dispatch({type: `${REQUEST_DATA}_PENDING`});
        api.getData()
            .then((res) => {
                dispatch({
                    type: `${REQUEST_DATA}_SUCCEEDED`,
                    payload: res
                });
			})
            .catch((err) => {
                dispatch({
                    type: `${REQUEST_DATA}_FAILED`,
                    payload: err
                })
            });
    }
}