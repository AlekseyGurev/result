import { TodoLayout } from '../../index';
import { useRequestGetTodos, useRequestAddTodo, useRequestDeleteTodo } from '../../index';
import { useState } from 'react';

export const Todos = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [fieldInput, setFieldInput] = useState('');
	const [isSortTodos, setIsSortTodos] = useState(false);
	const { todos, isLoading } = useRequestGetTodos(refreshTodos);
	const [sortTodos, setSortTodos] = useState(null);

	const { isCreating, requestAddTodo } = useRequestAddTodo(
		refreshTodos,
		setRefreshTodos,
		fieldInput,
		setFieldInput,
	);

	const onFieldInputChange = ({ target }) => {
		setFieldInput(target.value);
	};

	const onSortedClick = () => {
		if (!isSortTodos) {
			setSortTodos(
				todos.slice().sort((a, b) => {
					if (a.title > b.title) {
						return 1;
					}
					if (a.title < b.title) {
						return -1;
					}
					return 0;
				}),
			);
		} else {
			setSortTodos(null);
		}
		setIsSortTodos(!isSortTodos);
	};

	return (
		<TodoLayout
			todos={sortTodos ? sortTodos : todos}
			isLoading={isLoading}
			requestAddTodo={requestAddTodo}
			isCreating={isCreating}
			fieldInput={fieldInput}
			onFieldInputChange={onFieldInputChange}
			refreshTodos={refreshTodos}
			setRefreshTodos={setRefreshTodos}
			onSortedClick={onSortedClick}
			isSortTodos={isSortTodos}
		/>
	);
};
