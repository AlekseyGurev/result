import { FieldLayout } from '../../layouts/fieldLayout/FieldLayout';
import { store } from '../../../store/store';
import { changePLayer, setField, setWin, setDraw } from '../../../store/gameSlice';
import { isDraw, isWin } from '../../../utils/utils';

export const Field = () => {
	const { draw, win, currentPlayer, field } = store.getState().game;
	const handleClick = (index) => {
		if (field[index] || win || draw) return;

		const editField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);
		store.dispatch(setField(editField));

		if (isWin(editField, currentPlayer)) {
			store.dispatch(setWin());
			return;
		}
		if (isDraw(editField)) {
			store.dispatch(setDraw());
			return;
		}

		store.dispatch(changePLayer());
	};

	return <FieldLayout handleClick={handleClick} />;
};
