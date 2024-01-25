import { useState } from 'react';

export const useRefreshTodos = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);

	return { refreshTodos, setRefreshTodos };
};
