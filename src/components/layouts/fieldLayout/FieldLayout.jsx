import { Button } from '../../ui/button/Button';
import styles from './FieldLayout.module.css';
import { getPath } from '../../../utils/utils';
import { isDraw, isWin } from '../../../utils/utils';
import { useSelector, useDispatch } from 'react-redux';

export const FieldLayout = () => {
	const win = useSelector((state) => state.win);
	const draw = useSelector((state) => state.draw);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const field = useSelector((state) => state.field);
	const dispatch = useDispatch();

	const handleClick = (index) => {
		if (field[index] || win || draw) return;
		const editField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);
		dispatch({ type: 'SET_FIELD', payload: editField });

		if (isWin(editField, currentPlayer)) {
			dispatch({ type: 'SET_WIN' });
			return;
		}
		if (isDraw(editField)) {
			dispatch({ type: 'SET_DRAW' });
			return;
		}
		dispatch({ type: 'CHANGE_PLAYER' });
	};
	return (
		<div className={styles.container}>
			{field.map((cell, index) => (
				<Button
					type={'game'}
					key={index}
					handleClick={() => {
						handleClick(index);
					}}
				>
					{cell && <img draggable={false} src={getPath(cell)} alt="figure" />}
				</Button>
			))}
		</div>
	);
};
