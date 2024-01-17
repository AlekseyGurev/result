import { useState } from 'react';
import { request, getRandomId } from '../utilities/utilities';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestAddTodo = (
	refreshTodos,
	setRefreshTodos,
	fieldInput,
	setFieldInput,
) => {
	const [isCreating, setIsCreating] = useState(false);

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
				setRefreshTodos(!refreshTodos);
				setFieldInput('');
			})
			.catch((error) => console.log(error))
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
