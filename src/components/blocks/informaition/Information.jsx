import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import { useSelector } from 'react-redux';

export const Information = () => {
	const win = useSelector((state) => state.win);
	const draw = useSelector((state) => state.draw);
	const currentPlayer = useSelector((state) => state.currentPlayer);
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
