import { Button } from '../../ui/button/Button';
import styles from './FieldLayout.module.css';
import { getPath } from '../../../utils/utils';
import { useSelector } from 'react-redux';

export const FieldLayout = ({ handleClick }) => {
	const { field } = useSelector((state) => state.game);
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
