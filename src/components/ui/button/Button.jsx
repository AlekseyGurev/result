import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ type, children, handleClick, index, handleClickReset }) => {
	return (
		<button
			className={type === 'game' ? styles.game : styles.submit}
			data-id={type === 'game' ? index : ''}
			onClick={type === 'game' ? handleClick : handleClickReset}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	index: PropTypes.number,
	handleClick: PropTypes.func,
	handleClickReset: PropTypes.func,
};
