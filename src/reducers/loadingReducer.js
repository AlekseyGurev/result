export const initialState = {
	todos: [],
};

export const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TODOS':
			return { ...state, todos: action.payload };
		default:
			return state;
	}
};
