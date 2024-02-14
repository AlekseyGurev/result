import { useDispatch } from 'react-redux';
import { upAgeAction, resetAgeAction } from '../../actions';

export default function ControlPanel() {
	const dispatch = useDispatch();

	const upAge = () => {
		dispatch(upAgeAction(3));
	};

	const resetAge = () => {
		dispatch(resetAgeAction);
	};

	return (
		<div>
			<button onClick={upAge}>Увеличить</button>
			<button onClick={resetAge}>Уменьшить</button>
		</div>
	);
}
