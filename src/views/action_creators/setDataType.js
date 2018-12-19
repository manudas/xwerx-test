export const SET_DATA_TYPE = 'SET_DATA_TYPE';

export default function setDataType(dataType){
    return {
        type: SET_DATA_TYPE,
        dataType
    }
}