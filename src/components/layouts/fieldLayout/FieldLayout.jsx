import { Button } from '../../ui/button/Button';
import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';
import { getPath } from '../../../utils/utils';

export const FieldLayout = ({ field, handleClick }) => {
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
