import styles from './InformationLayout.module.css';
import { store } from '../../../store/store';

export const InformationLayout = ({ children }) => {
	const { draw, win } = store.getState().game;
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
