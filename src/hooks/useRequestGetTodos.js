import { useEffect, useState } from 'react';
import { request } from '../utilities';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		request(`${BASE_URL}`, { method: 'GET' })
			.then((data) => setTodos(data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, []);
	return { todos, isLoading };
};
