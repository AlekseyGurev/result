const fetchUserDataMock = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				name: 'Danya',
				age: 40,
			});
		}, 1500);
	});
};

export const changeUserAction = (dispatch) => {
	fetchUserDataMock().then((userDataFromServer) => {
		dispatch({
			type: 'CHANGE_USER',
			payload: userDataFromServer,
		});
	});
};
