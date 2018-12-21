export const SET_DATA_TYPE = 'SET_DATA_TYPE';

/**
 * Action creator to set the type of data
 * that is going to be drawn in the application
 * @param {*} dataType a list of possible
 * parameters values is available in utils/DataType.js
 * 
 */
export default function setDataType(dataType){
    return {
        type: SET_DATA_TYPE,
        dataType
    }
}