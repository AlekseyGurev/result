import styles from './Title.module.css';

import { Component } from 'react';

export class Title extends Component {
	render() {
		return <h1 className={styles.title}>Крестики - нолики</h1>;
	}
}
