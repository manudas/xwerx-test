const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
/**
 * Pass a date object into this function
 */
const month_name = function(dt){
    return mlist[dt.getMonth()];
};

/**
 * Function used to get a date string
 * in the format {short month string day}
 * @param {*} ts epoch linux timestamp
 * 
 */
export function getDateFromTimestamp(ts) {
    const date = new Date(ts);
    const mn = month_name(date);
    const day = date.getDate();
    return `${mn} ${day}`;
}