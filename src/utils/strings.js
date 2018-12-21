/**
 * Function to Uppercase the first letter of a
 * string and to lowercase the rest
 * @param {*} string 
 */
export function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

