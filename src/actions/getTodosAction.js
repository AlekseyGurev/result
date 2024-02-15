const BASE_URL = 'http://localhost:3005/todos';
import { request } from '../utilities/utilities';
import { setLoadingAction } from '../actions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorIsRefreshTodos } from '../selectors';

export const getTodosAction = (dispatch) => {
	useEffect(() => {
		dispatch(setLoadingAction);
		request(`${BASE_URL}`, { method: 'GET' })
			.then((data) =>
				dispatch({
					type: 'GET_TODOS',
					payload: data,
				}),
			)
			.catch((error) => console.log(error))
			.finally(dispatch(setLoadingAction));
	}, [useSelector(selectorIsRefreshTodos)]);
};
