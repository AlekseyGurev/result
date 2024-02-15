import styles from './InformationLayout.module.css';
import { useSelector } from 'react-redux';

export const InformationLayout = ({ children }) => {
	const { draw, win } = useSelector((state) => state.game);
	return (
		<p
			className={`${styles.information} ${win ? styles.green : null} ${
				draw ? styles.yellow : null
			}`}
		>
			{children}
		</p>
	);
};
