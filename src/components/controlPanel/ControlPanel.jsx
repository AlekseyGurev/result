import { useDispatch } from 'react-redux';
import { upAgeAction, resetAgeAction, changeUserAction } from '../../actions';

export default function ControlPanel() {
	const dispatch = useDispatch();

	const upAge = () => {
		dispatch(upAgeAction(3));
	};

	const resetAge = () => {
		dispatch(resetAgeAction);
	};

	const userChange = () => {
		dispatch(changeUserAction);
	};

	return (
		<div>
			<button onClick={upAge}>Увеличить</button>
			<button onClick={resetAge}>Уменьшить</button>
			<button onClick={userChange}>Поменять пользователя</button>
		</div>
	);
}
