import { useState } from 'react';
import {
	useRequestGetTodo,
	useRequestDeleteTodo,
	useRequestEditTodo,
} from '../../../hooks/index';
import { TodoItemLayout } from '../../index';
import { useParams, useNavigate } from 'react-router-dom';
import { useRefreshTodos } from '../../../hooks';

export const TodoItem = () => {
	const [isEditFlag, setEditFlag] = useState(false);
	const [editTodo, setEditTodo] = useState('');
	const { refreshTodos, setRefreshTodos } = useRefreshTodos();

	const { id } = useParams();

	const navigate = useNavigate();

	const { todo, isLoading } = useRequestGetTodo(id, refreshTodos);

	const goToBack = () => {
		navigate(-1);
	};

	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(
		refreshTodos,
		setRefreshTodos,
	);

	const { isSaving, requestEditTodo } = useRequestEditTodo(
		refreshTodos,
		setRefreshTodos,
	);

	const onDeleteClick = () => {
		requestDeleteTodo(id);
	};

	const onEditTodoChange = ({ target }) => {
		setEditTodo(target.value);
	};
	const onEditTodoBlur = () => {
		setEditFlag(false);
		requestEditTodo(id, editTodo);
	};

	const onEditSaveClick = () => {
		setEditFlag(false);
		requestEditTodo(id, editTodo);
	};
	const onEditClick = () => {
		setEditFlag(true);
		setEditTodo(todo.title);
	};

	const onBackButtonClick = () => {
		goToBack();
	};

	return (
		<TodoItemLayout
			isLoading={isLoading}
			title={todo.title}
			editTodo={editTodo}
			isEditFlag={isEditFlag}
			onDeleteClick={onDeleteClick}
			isDeleting={isDeleting}
			isSaving={isSaving}
			onEditClick={onEditClick}
			onEditSaveClick={onEditSaveClick}
			onEditTodoChange={onEditTodoChange}
			onEditTodoBlur={onEditTodoBlur}
			onBackButtonClick={onBackButtonClick}
		/>
	);
};
