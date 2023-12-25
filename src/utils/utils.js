import { WIN_PATTERNS } from '../constants/constants';
import { circle, cross } from '../assets';

export const isDraw = (field) => field.every((cell) => cell);

export const isWin = (field, currentPlayer) =>
	WIN_PATTERNS.some((pattern) => pattern.every((ind) => field[ind] === currentPlayer));

export const getPath = (cell) => {
	return cell === 'X' ? cross : circle;
};
