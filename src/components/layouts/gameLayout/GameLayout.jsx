import { Field } from '../../blocks/field/Field';
import { Information } from '../../blocks/informaition/Information';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = (props) => {
	return (
		<section className={styles.game}>
			<Title />
			<div className={styles.container}>
				<Information
					isDraw={props.draw}
					isGameEnded={props.win}
					currentPlayer={props.currentPlayer}
				/>
				<Field {...props} />
				{props.win || props.draw ? (
					<Button type={'submit'} handleClickReset={props.handleClickReset}>
						{'Новая игра'}
					</Button>
				) : null}
			</div>
		</section>
	);
};

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	handleClickReset: PropTypes.func,
};
