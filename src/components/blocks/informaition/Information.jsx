import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let result = '';
	if (isDraw) {
		result = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		result = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		result = `Ходит: ${currentPlayer}`;
	}
	return (
		<InformationLayout isDraw={isDraw} isGameEnded={isGameEnded}>
			{result}
		</InformationLayout>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
