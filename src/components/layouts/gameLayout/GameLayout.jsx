import { Field } from '../../blocks/field/Field';
import { Information } from '../../blocks/informaition/Information';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import styles from './GameLayout.module.css';
import { resetGame } from '../../../store/gameSlice';
import { useSelector, useDispatch } from 'react-redux';

export const GameLayout = () => {
	const dispatch = useDispatch();
	const { draw, win } = useSelector((state) => state.game);

	const handleClickReset = () => {
		dispatch(resetGame());
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
