import { Button } from '../../ui/button/Button';
import { NotFound } from '../notFound/NotFound';
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
	onBackButtonClick,
	isLoading,
}) => {
	return isLoading ? (
		<div className={styles.loader}></div>
	) : !isLoading ? (
		<div className={styles.card}>
			<Button name={'Назад'} onClickHandle={onBackButtonClick} />
			{isEditFlag ? (
				<div className={styles.container}>
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
				</div>
			) : (
				<div className={styles.container}>
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
				</div>
			)}
		</div>
	) : (
		<NotFound />
	);
};
