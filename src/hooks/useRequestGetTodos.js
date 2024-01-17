import { useEffect, useState } from 'react';
import { request } from '../utilities/utilities';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestGetTodos = (refreshTodos) => {
	const [todos, setTodos] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		request(`${BASE_URL}`, { method: 'GET' })
			.then((data) => setTodos(data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, [refreshTodos]);
	return { todos, isLoading };
};
