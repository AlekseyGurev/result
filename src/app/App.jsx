import { Game } from '../components/blocks/game/Game';
import { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div>
				<main className="app">
					<Game />
				</main>
			</div>
		);
	}
}

export default App;
