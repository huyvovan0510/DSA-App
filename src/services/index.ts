import DSAApi from './DSAApi';

const API_PATH = {
	TOP_TEN: 'api/v1/getWeekTop10'
};

const getTopTenList = async () => {
	const response = await DSAApi.Get(API_PATH.TOP_TEN);
	return response;
};

export const DSAServices = {
	getTopTenList
};
