export function linkClientWithSales(decodedApiResponse){
	const apiClients = decodedApiResponse.clients;
	const sales = decodedApiResponse.sales;
	if (apiClients && sales){
		apiClients.forEach(client => {
			const apiClientSales = client.sales;
			const clientSalesObjects = [];
			apiClientSales.forEach(client_sale => {
				sales.forEach(sale => {
					if (sale.id == client_sale) {
						clientSalesObjects.push(sale);
					}
				});
			});
			client = Object.assign({}, client, {
				sales: clientSalesObjects
			})
		});
	}
	return decodedApiResponse;
}

let BreakException = {};

export function linkSalesWithClient(decodedApiResponse){
	
	const apiClients = decodedApiResponse.clients;
	const sales = decodedApiResponse.sales;
	if (apiClients && sales){
		sales.forEach(sale => {
			const sale_id = sale.id;
			try {
				apiClients.forEach(client => {
					const client_sales = client.sales;
					if (client_sales.indexOf(sale_id) != -1) {
						// the sale belongs to this customer
						sale.client = client.name;
						throw BreakException;
					}
				});
			} catch (e) {
				if (e !== BreakException) throw e;
			}
		});
	}

	return decodedApiResponse;
}

export function veryImportantClients(decodedApiResponse){
	const apiClients = decodedApiResponse.clients;
	const totalClients = apiClients.length;

	let veryImportantClients = 0;
	if (apiClients){
		apiClients.forEach(client => {
			// maybe we can change this hardcoded 3 for a const in other file
			// the same with Client component
			if (client.sales.length >= 3) {
				veryImportantClients++;
			}
		});
	}
	return {
		totalClients,
		veryImportantClients
	};
}

export function salesFromVeryImportanClients(decodedApiResponse){
	
	const apiClients = decodedApiResponse.clients;
	const salesFromVeryImportantClientArray = [];

	if (apiClients){
		apiClients.forEach(client => {
			// maybe we can change this hardcoded 3 for a const in other file
			// the same with Client component
			if (client.sales.length >= 3) {
				client.sales.forEach(sale => {
					salesFromVeryImportantClientArray.push(sale);
				});
			}
		});
	}
	return salesFromVeryImportantClientArray;
}