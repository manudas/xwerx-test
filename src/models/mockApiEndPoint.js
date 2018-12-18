
function fetchData(url, param_arr){
	let param_str = '?';
	if (param_arr) {
		param_arr.array.forEach(element => {
			param_arr += `${element.key}=${element.value}&`;
		});
	}
	return fetch(url+param_str)
		.then((response) => {
			const wait = ms => new Promise((r, j)=>setTimeout(r, ms))
			const prom = wait(2000);
			return prom.then(response)
		})
		.catch(
			error => error
	);
}

export function getData(){
	return fetchData('/api/data.json', null);
}