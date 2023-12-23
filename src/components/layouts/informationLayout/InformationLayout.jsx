import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isGameEnded, isDraw, children }) => {
	return (
		<p
			className={`${styles.information} ${isGameEnded ? styles.green : null} ${
				isDraw ? styles.yellow : null
			}`}
		>
			{children}
		</p>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};
