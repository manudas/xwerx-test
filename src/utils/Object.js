/**
 * Function used to ensure an object is
 * empty and does not have properties
 * 
 * @param {*} obj any JS object
 */
export function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}