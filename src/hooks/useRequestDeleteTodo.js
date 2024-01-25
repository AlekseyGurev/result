import { useState } from 'react';
import { request } from '../utilities/utilities';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestDeleteTodo = (refreshTodos, setRefreshTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const navigate = useNavigate();

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);

		request(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				console.log('Запись удалена');
				setRefreshTodos(!refreshTodos);
				navigate('/', { replace: true });
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setIsDeleting(false);
			});
	};
	return { requestDeleteTodo, isDeleting };
};
