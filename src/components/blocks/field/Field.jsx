import { FieldLayout } from '../../layouts/fieldLayout/FieldLayout';
import { changePLayer, setField, setWin, setDraw } from '../../../store/gameSlice';
import { isDraw, isWin } from '../../../utils/utils';
import { useSelector, useDispatch } from 'react-redux';

export const Field = () => {
	const { draw, win, currentPlayer, field } = useSelector((state) => state.game);
	const dispatch = useDispatch();
	const handleClick = (index) => {
		if (field[index] || win || draw) return;

		const editField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);
		dispatch(setField(editField));

		if (isWin(editField, currentPlayer)) {
			dispatch(setWin());
			return;
		}
		if (isDraw(editField)) {
			dispatch(setDraw());
			return;
		}

		dispatch(changePLayer());
	};

	return <FieldLayout handleClick={handleClick} />;
};
