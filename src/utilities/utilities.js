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

export const sorting = (array) => {
	const newObject = {};
	array &&
		Object.entries(array)
			.sort((a, b) => {
				if (a[1].title > b[1].title) {
					return 1;
				}
				if (a[1].title < b[1].title) {
					return -1;
				}
				return 0;
			})
			.forEach((item) => {
				newObject[item[0]] = item[1];
			});
	return newObject;
};
