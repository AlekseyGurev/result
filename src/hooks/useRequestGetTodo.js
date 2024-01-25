import { useEffect, useState } from 'react';
import { request } from '../utilities/utilities';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestGetTodo = (id, refreshTodos) => {
	const [todo, setTodo] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		request(`${BASE_URL}/${id}`, { method: 'GET' })
			.then((data) => setTodo(data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, [refreshTodos]);
	return { todo, isLoading };
};
