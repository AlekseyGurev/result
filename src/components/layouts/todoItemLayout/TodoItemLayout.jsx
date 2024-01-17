import { Button } from '../../ui/button/Button';
import styles from './TodoItemLayout.module.css';

export const TodoItemLayout = ({
	title,
	isEditFlag,
	editTodo,
	onEditTodoChange,
	onEditTodoBlur,
	isSaving,
	onEditSaveClick,
	onEditClick,
	isDeleting,
	onDeleteClick,
}) => {
	return (
		<li className={styles.container}>
			{isEditFlag ? (
				<>
					<input
						className={styles.edit}
						type="text"
						value={editTodo}
						onChange={onEditTodoChange}
						onBlur={onEditTodoBlur}
					/>
					<Button
						name={'Сохранить'}
						disabledFlag={isSaving}
						onClickHandle={onEditSaveClick}
						itemsButton={true}
					/>
				</>
			) : (
				<>
					<p className={styles.title}>{title}</p>
					<Button
						name={'Изменить'}
						onClickHandle={onEditClick}
						itemsButton={true}
					/>
					<Button
						name={'Удалить'}
						disabledFlag={isDeleting}
						onClickHandle={onDeleteClick}
						itemsButton={true}
					/>
				</>
			)}
		</li>
	);
};
