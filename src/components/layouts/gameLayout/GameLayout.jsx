import { Field } from '../../blocks/field/Field';
import { Information } from '../../blocks/informaition/Information';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import styles from './GameLayout.module.css';
import { useSelector, useDispatch } from 'react-redux';

export const GameLayout = () => {
	const win = useSelector((state) => state.win);
	const draw = useSelector((state) => state.draw);
	const dispatch = useDispatch();

	const handleClickReset = () => {
		dispatch({ type: 'RESET_GAME' });
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
