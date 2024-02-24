import { Game } from '../components/blocks/game/Game';
import styles from './App.module.css';
import { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div className={styles.app}>
				<main className={styles.main}>
					<Game />
				</main>
			</div>
		);
	}
}

export default App;
