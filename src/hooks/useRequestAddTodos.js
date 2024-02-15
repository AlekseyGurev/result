import { useState } from 'react';
import { request, getRandomId } from '../utilities/utilities';
import { useDispatch } from 'react-redux';
import { setIsRefresh } from '../actions';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestAddTodo = (fieldInput, setFieldInput) => {
	const [isCreating, setIsCreating] = useState(false);
	const dispatch = useDispatch();

	const requestAddTodo = () => {
		setIsCreating(true);

		request(`${BASE_URL}`, {
			method: 'POST',
			body: JSON.stringify({
				id: getRandomId(),
				title: fieldInput,
			}),
		})
			.then((response) => {
				console.log('Запись добавлена', response);
				dispatch(setIsRefresh);
				setFieldInput('');
			})
			.catch((error) => console.log(error))
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
