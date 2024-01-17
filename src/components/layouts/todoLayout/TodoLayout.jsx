import { TodoItem, AddTodo, Button } from '../../index';
import styles from './TodoLayout.module.css';

export const TodoLayout = (props) => {
	const {
		todos,
		isLoading,
		isCreating,
		requestAddTodo,
		fieldInput,
		onFieldInputChange,
		refreshTodos,
		setRefreshTodos,
		onSortedClick,
		isSortTodos,
	} = props;

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Список дел</h1>
			<div className={styles.containerInput}>
				<AddTodo
					fieldInput={fieldInput}
					onFieldInputChange={onFieldInputChange}
				/>
				<Button
					name={'Добавить задачу'}
					onClickHandle={requestAddTodo}
					disabledFlag={isCreating}
				/>
				<Button name={'Найти'} />
			</div>
			<div className={styles.containerFilters}>
				<Button
					name={'по алфавиту'}
					filtersButton={true}
					onClickHandle={onSortedClick}
					isSortTodos={isSortTodos}
				/>
			</div>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : todos ? (
				<ul>
					{todos.map(({ id, title }) => (
						<TodoItem
							key={id}
							id={id}
							title={title}
							refreshTodos={refreshTodos}
							setRefreshTodos={setRefreshTodos}
						/>
					))}
				</ul>
			) : (
				<div className={styles.error}>
					<p>Ошибка загрузки </p>
				</div>
			)}
		</section>
	);
};
