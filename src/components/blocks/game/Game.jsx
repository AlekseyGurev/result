import { GameLayout } from '../../layouts/gameLayout/GameLayout';
import { useState } from 'react';
import { field as initialField } from '../../../constants/constants';
import { isDraw, isWin } from '../../../utils/utils';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [win, setWin] = useState(false);
	const [draw, setDraw] = useState(false);
	const [field, setField] = useState(initialField);

	const handleClickReset = () => {
		setWin(false);
		setDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
		setCurrentPlayer('X');
	};

	const handleClick = (index) => {
		if (field[index] || win || draw) return;

		const editField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);

		setField(editField);

		if (isWin(editField, currentPlayer)) {
			setWin(true);
			return;
		}
		if (isDraw(editField)) {
			setDraw(true);
			return;
		}

		setCurrentPlayer((prev) => (prev === 'X' ? '0' : 'X'));
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			win={win}
			draw={draw}
			field={field}
			handleClickReset={handleClickReset}
			handleClick={handleClick}
		/>
	);
};
