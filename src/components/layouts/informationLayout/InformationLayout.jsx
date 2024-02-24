import styles from './InformationLayout.module.css';
import { Component } from 'react';
export class InformationLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<p
				className={`${styles.information} ${
					this.props.isGameEnded ? styles.green : null
				} ${this.props.isDraw ? styles.yellow : null}`}
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
