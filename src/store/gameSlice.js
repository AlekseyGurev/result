import { createSlice } from '@reduxjs/toolkit';
import { field } from '../constants/constants';

const initialState = { currentPlayer: 'X', win: false, draw: false, field: field };

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setWin(state) {
			state.win = true;
		},
		setDraw(state) {
			state.draw = true;
		},
		resetGame() {
			return initialState;
		},
		changePLayer(state) {
			state.currentPlayer = state.currentPlayer === 'X' ? '0' : 'X';
		},

		setField(state, action) {
			state.field = action.payload;
		},
	},
});

export const { setWin, setDraw, resetGame, setField, changePLayer } = gameSlice.actions;

export default gameSlice.reducer;
