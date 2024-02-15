import { useState } from 'react';
import { request } from '../utilities/utilities';
import { useDispatch } from 'react-redux';
import { setIsRefresh } from '../actions';
const BASE_URL = 'http://localhost:3005/todos';

export const useRequestEditTodo = (refreshTodos, setRefreshTodos) => {
	const [isSaving, setIsSaving] = useState(false);
	const dispatch = useDispatch();

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
				dispatch(setIsRefresh);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsSaving(false));
	};

	return { requestEditTodo, isSaving };
};
