import styles from './Button.module.css';

import { Component } from 'react';

export class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={this.props.type === 'game' ? styles.game : styles.submit}
				onClick={
					this.props.type === 'game'
						? this.props.handleClick
						: this.props.handleClickReset
				}
			>
				{this.props.children}
			</button>
		);
	}
}
