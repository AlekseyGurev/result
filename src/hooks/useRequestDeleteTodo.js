import { useState } from 'react';
import { request } from '../utilities/utilities';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestDeleteTodo = (refreshTodos, setRefreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (id) => {
		console.log(id);
		setIsDeleting(true);

		request(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				console.log('Запись удалена');
				setRefreshTodos(!refreshTodos);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTodo, isDeleting };
};
