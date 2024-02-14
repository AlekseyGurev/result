import { selectAge, selectName } from '../../selectors';
import { useSelector } from 'react-redux';

export default function User() {
	const name = useSelector(selectName);
	const age = useSelector(selectAge);
	return (
		<div>
			<div>пользователь:</div>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
		</div>
	);
}
