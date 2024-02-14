export const initialUserState = {
	name: 'petr',
	age: 25,
};

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case 'up_Age':
			return {
				...state,
				age: state.age + action.payload,
			};

		case 'RESET_AGE':
			return {
				...state,
				age: initialUserState.age,
			};

		default:
			return state;
	}
};
