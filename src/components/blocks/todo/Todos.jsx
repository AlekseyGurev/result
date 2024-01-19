import { TodoLayout } from '../../index';
import { useRequestGetTodos, useRequestAddTodo } from '../../../hooks/index';
import { useState, useRef, useEffect } from 'react';
import { sorting } from '../../../utilities/utilities';

export const Todos = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [searchField, setSearchField] = useState('');
	const [fieldInput, setFieldInput] = useState('');
	const [isSortTodos, setIsSortTodos] = useState(false);
	const [editTodos, setEditTodos] = useState(null);
	const { todos, isLoading } = useRequestGetTodos(refreshTodos);
	const searchFieldRef = useRef('');

	const { isCreating, requestAddTodo } = useRequestAddTodo(
		refreshTodos,
		setRefreshTodos,
		fieldInput,
		setFieldInput,
	);

	const onFieldSearchChange = ({ target }) => {
		setSearchField(target.value);
	};

	const onFieldInputChange = ({ target }) => {
		setFieldInput(target.value);
	};

	const onSortedClick = () => {
		setIsSortTodos(!isSortTodos);
	};

	useEffect(() => {
		let newTodos = [];
		if (searchFieldRef.current.value !== '') {
			todos.forEach((item) => {
				item.title.includes(searchFieldRef.current.value) && newTodos.push(item);
			});
			return isSortTodos ? setEditTodos(sorting(newTodos)) : setEditTodos(newTodos);
		}
		return isSortTodos ? setEditTodos(sorting(todos)) : setEditTodos(todos);
	}, [todos, searchField, isSortTodos]);

	return (
		<TodoLayout
			todos={editTodos}
			isLoading={isLoading}
			requestAddTodo={requestAddTodo}
			isCreating={isCreating}
			fieldInput={fieldInput}
			onFieldInputChange={onFieldInputChange}
			refreshTodos={refreshTodos}
			setRefreshTodos={setRefreshTodos}
			onSortedClick={onSortedClick}
			isSortTodos={isSortTodos}
			searchField={searchField}
			onFieldSearchChange={onFieldSearchChange}
			searchFieldRef={searchFieldRef}
		/>
	);
};
