import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import { store } from '../../../store/store';

export const Information = () => {
	const { draw, win, currentPlayer } = store.getState().game;
	let result = '';
	if (draw) {
		result = 'Ничья';
	} else if (!draw && win) {
		result = `Победа: ${currentPlayer}`;
	} else if (!draw && !win) {
		result = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout>{result}</InformationLayout>;
};
