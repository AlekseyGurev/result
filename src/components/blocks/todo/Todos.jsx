import { TodoLayout } from '../../index';
import { useRequestAddTodo } from '../../../hooks/index';
import { useState, useRef, useEffect } from 'react';
import { sorting } from '../../../utilities/utilities';
import { getTodosAction } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../../../selectors';

export const Todos = () => {
	const dispatch = useDispatch();
	dispatch(getTodosAction);
	const todos = useSelector(selectTodos);

	const [editTodos, setEditTodos] = useState(null);

	const [searchField, setSearchField] = useState('');
	const [fieldInput, setFieldInput] = useState('');
	const [isSortTodos, setIsSortTodos] = useState(false);
	const searchFieldRef = useRef('');

	const { isCreating, requestAddTodo } = useRequestAddTodo(fieldInput, setFieldInput);

	const onFieldSearchChange = ({ target }) => {
		setSearchField(target.value);
	};

	const onFieldInputChange = ({ target }) => {
		setFieldInput(target.value);
	};

	useEffect(() => {
		let newTodos = [];
		if (searchFieldRef.current.value !== '') {
			todos &&
				todos.forEach((item) => {
					item.title.includes(searchFieldRef.current.value) &&
						newTodos.push(item);
				});
			return isSortTodos ? setEditTodos(sorting(newTodos)) : setEditTodos(newTodos);
		}
		return isSortTodos ? setEditTodos(sorting(todos)) : setEditTodos(todos);
	}, [todos, searchField, isSortTodos]);

	const onSortedClick = () => {
		setIsSortTodos(!isSortTodos);
	};

	return (
		<TodoLayout
			todos={editTodos}
			requestAddTodo={requestAddTodo}
			isCreating={isCreating}
			fieldInput={fieldInput}
			onFieldInputChange={onFieldInputChange}
			isSortTodos={isSortTodos}
			searchField={searchField}
			onFieldSearchChange={onFieldSearchChange}
			searchFieldRef={searchFieldRef}
			onSortedClick={onSortedClick}
		/>
	);
};
