import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import { store } from '../../../store';

export const Information = () => {
	const { draw, win, currentPlayer } = store.getState();
	let result = '';
	if (draw) {
		result = 'Ничья';
	} else if (!draw && win) {
		result = `Победа: ${currentPlayer}`;
	} else if (!draw && !win) {
		result = `Ходит: ${currentPlayer}`;
	}
	return (
		<InformationLayout isDraw={draw} isGameEnded={win}>
			{result}
		</InformationLayout>
	);
};
