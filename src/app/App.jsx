import { Game } from '../components/blocks/game/Game';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.app}>
			<main className={styles.main}>
				<Game />
			</main>
		</div>
	);
}

export default App;
