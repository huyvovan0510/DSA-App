const API_HOST = 'imdb188.p.rapidapi.com';

type ApiMethods = 'GET' | 'POST';

const createRequest = async (
	endpoint: string,
	method: ApiMethods,
	data?: any
) => {
	const url = `https://${API_HOST}/${endpoint}`;

	const headers = {
		'X-RapidAPI-Key': '7d55f12cc7mshc7dfa3a080fa3e6p162aa9jsnc9ef34a6ed17',
		'X-RapidAPI-Host': API_HOST
	};

	const config = {
		method: method,
		headers: headers,
		body: data ? JSON.stringify(data) : null
	};

	try {
		const response = await fetch(url, config);
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log('\x1b[35;1m ~ error:', error);

		throw error;
	}
};

const Get = (endpoint: string) => {
	return createRequest(endpoint, 'GET');
};

const DSAApi = { Get };

export default DSAApi;
