import { Button } from '../../ui/button/Button';
import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.container}>
			{field.map((item, index) => (
				<Button type={'game'} key={index} index={index} handleClick={handleClick}>
					{item}
				</Button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
