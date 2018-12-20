const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
/**
 * Pass a date object into this function
 */
const month_name = function(dt){
    return mlist[dt.getMonth()];
};

export function getDateFromTimestamp(ts) {
    const date = new Date(ts);
    const mn = month_name(date);
    const day = date.getDate();
    return `${mn} ${day}`;
}