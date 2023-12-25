import styles from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ type, children, handleClick, handleClickReset }) => {
	return (
		<button
			className={type === 'game' ? styles.game : styles.submit}
			onClick={type === 'game' ? handleClick : handleClickReset}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string,
	handleClick: PropTypes.func,
	handleClickReset: PropTypes.func,
};
