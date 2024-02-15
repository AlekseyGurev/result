import { Button } from '../../ui/button/Button';
import styles from './FieldLayout.module.css';
import { getPath } from '../../../utils/utils';
import { isDraw, isWin } from '../../../utils/utils';
import { store } from '../../../store';

export const FieldLayout = () => {
	const { draw, win, currentPlayer, field } = store.getState();

	const handleClick = (index) => {
		if (field[index] || win || draw) return;
		const editField = field.map((cell, idx) =>
			idx === index ? currentPlayer : cell,
		);
		store.dispatch({ type: 'SET_FIELD', payload: editField });

		if (isWin(editField, currentPlayer)) {
			store.dispatch({ type: 'SET_WIN' });
			return;
		}
		if (isDraw(editField)) {
			store.dispatch({ type: 'SET_DRAW' });
			return;
		}
		store.dispatch({ type: 'CHANGE_PLAYER' });
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
