export const request = async (url, options) => {
	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error(response.status);
	}
	return response.json();
};

export const getRandomId = (min = 1, max = 10000) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min).toString();
};

export const sortArray = (todos) => {
	return todos.slice().sort((a, b) => {
		if (a.title > b.title) {
			return 1;
		}
		if (a.title < b.title) {
			return -1;
		}
		return 0;
	});
};
