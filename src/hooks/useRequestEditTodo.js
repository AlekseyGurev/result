import { useState } from 'react';
import { request } from '../utilities/utilities';
const BASE_URL = 'http://localhost:3005/todos';

export const useRequestEditTodo = (refreshTodos, setRefreshTodos) => {
	const [isSaving, setIsSaving] = useState(false);

	const requestEditTodo = (id, editTodo) => {
		setIsSaving(true);

		request(`${BASE_URL}/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: editTodo,
			}),
		})
			.then((response) => {
				console.log('Запись обновлена', response);
				setRefreshTodos(!refreshTodos);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsSaving(false));
	};

	return { requestEditTodo, isSaving };
};
