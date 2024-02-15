import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import { useSelector } from 'react-redux';

export const Information = () => {
	const { draw, win, currentPlayer } = useSelector((state) => state.game);
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
