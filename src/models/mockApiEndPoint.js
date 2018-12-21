/**
 * Function used to mock the API call endpoint
 * @param {*} url 
 * @param {*} param_arr 
 */
function fetchData(url, param_arr){
	let param_str = '?';
	if (param_arr) {
		param_arr.array.forEach(element => {
			param_arr += `${element.key}=${element.value}&`;
		});
	}
	return fetch(url+param_str,
		{
			method: 'GET',
			headers: {
				'Accept': 'application/json'
			}
		})
		.then((response) => response.text()
		).then((text) => {
			const wait = ms => new Promise((r, j)=>setTimeout(r, ms))
			const prom = wait(2000);
			return prom.then(() => { // working properly
				// Do something after the sleep! Return text
				return text;
			});
		}

		).then(delayedText => {
			return delayedText;
		})
		.catch((error) => {
			console.log(error);
			return error;
		}
	);
}

/**
 * Function used to call to the API endpoint
 */
export function getData(){
	const promise_json = fetchData('/api/data.json', null);
	return promise_json;
}