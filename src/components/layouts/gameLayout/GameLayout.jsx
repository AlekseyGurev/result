import { Field } from '../../blocks/field/Field';
import { Information } from '../../blocks/informaition/Information';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import styles from './GameLayout.module.css';
import { store } from '../../../store/store';
import { resetGame } from '../../../store/gameSlice';

export const GameLayout = () => {
	const { draw, win } = store.getState().game;

	const handleClickReset = () => {
		store.dispatch(resetGame());
	};
	return (
		<section className={styles.game}>
			<Title />
			<div className={styles.container}>
				<Information />
				<Field />
				{win || draw ? (
					<Button type={'submit'} handleClickReset={handleClickReset}>
						{'Новая игра'}
					</Button>
				) : null}
			</div>
		</section>
	);
};
