import { useState } from 'react';
import { request } from '../utilities/utilities';
import { useDispatch } from 'react-redux';
import { setIsRefresh } from '../actions';

const BASE_URL = 'http://localhost:3005/todos';

export const useRequestDeleteTodo = () => {
	const [isDeleting, setIsDeleting] = useState(false);
	const dispatch = useDispatch();

	const requestDeleteTodo = (id) => {
		console.log(id);
		setIsDeleting(true);

		request(`${BASE_URL}/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				console.log('Запись удалена');
				dispatch(setIsRefresh);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTodo, isDeleting };
};
