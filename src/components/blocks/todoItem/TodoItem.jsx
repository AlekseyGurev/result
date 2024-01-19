import { useState } from 'react';
import { useRequestDeleteTodo, useRequestEditTodo } from '../../../hooks/index';
import { TodoItemLayout } from '../../index';

export const TodoItem = ({ id, title, refreshTodos, setRefreshTodos }) => {
	const [isEditFlag, setEditFlag] = useState(false);
	const [editTodo, setEditTodo] = useState('');

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
		setEditTodo(title);
	};
	return (
		<TodoItemLayout
			title={title}
			editTodo={editTodo}
			isEditFlag={isEditFlag}
			onDeleteClick={onDeleteClick}
			isDeleting={isDeleting}
			isSaving={isSaving}
			onEditClick={onEditClick}
			onEditSaveClick={onEditSaveClick}
			onEditTodoChange={onEditTodoChange}
			onEditTodoBlur={onEditTodoBlur}
		/>
	);
};
