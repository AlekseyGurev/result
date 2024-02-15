export const initialState = {
	isLoaing: false,
	isRefreshTodos: false,
};

export const checkReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_LOADING':
			return { ...state, isLoaing: !state.isLoaing };
		case 'IS_REFRESH':
			return { ...state, isRefreshTodos: !state.isRefreshTodos };
		default:
			return state;
	}
};
