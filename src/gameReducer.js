import { field } from './constants/constants';
const initialState = { currentPlayer: 'X', win: false, draw: false, field: field };

export function gameReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_WIN':
			return { ...state, win: true };
		case 'SET_DRAW':
			return { ...state, draw: true };
		case 'RESET_GAME':
			return { ...initialState };
		case 'CHANGE_PLAYER':
			return { ...state, currentPlayer: state.currentPlayer === 'X' ? '0' : 'X' };
		case 'SET_FIELD':
			return { ...state, field: action.payload };
		default:
			return state;
	}
}
