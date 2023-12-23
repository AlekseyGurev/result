import { FieldLayout } from '../../layouts/fieldLayout/FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
	isGameEnded,
	isDraw,
	setIsDraw,
	WIN_PATTERNS,
}) => {
	const isWin = (editField) => {
		let win = false;
		WIN_PATTERNS.forEach((items) => {
			let resultX = 0;
			let resultO = 0;
			items.forEach((index) => {
				if (editField[index] === 'X') {
					resultX += 1;
				}
				if (editField[index] === 'O') {
					resultO += 1;
				}
			});
			if (resultX === 3 || resultO === 3) {
				win = true;
			}
		});
		return win;
	};

	const handleClick = (event) => {
		const indexButton = event.target.getAttribute('data-id');

		if (!isGameEnded && field[indexButton] === '') {
			const editField = field.map((item, index) => {
				if (String(index) === indexButton) {
					return currentPlayer;
				} else {
					return item;
				}
			});

			setField(editField);

			if (isWin(editField)) {
				!isGameEnded && setIsGameEnded(true);
			} else if (!isGameEnded && !editField.includes('')) {
				!isDraw && setIsDraw(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};
	return <FieldLayout field={field} handleClick={handleClick} />;
};

Field.propTypes = {
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
};
