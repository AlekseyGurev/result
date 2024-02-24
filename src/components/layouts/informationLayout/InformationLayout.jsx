import { Component } from 'react';
export class InformationLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p
				className={`information ${this.props.isGameEnded ? 'green' : null} ${
					this.props.isDraw ? 'yellow' : null
				}`}
			>
				{this.props.isDraw
					? 'Ничья'
					: this.props.isGameEnded
						? `Победа ${this.props.currentPlayer}`
						: `Ходит ${this.props.currentPlayer}`}
			</p>
		);
	}
}
