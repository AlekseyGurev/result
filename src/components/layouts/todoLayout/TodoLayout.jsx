import { TodoItem, AddTodo, Button } from '../../index';
import styles from './TodoLayout.module.css';
import { selectIsLoading } from '../../../selectors';
import { useSelector } from 'react-redux';

export const TodoLayout = (props) => {
	const {
		todos,
		isCreating,
		requestAddTodo,
		fieldInput,
		onFieldInputChange,
		onSortedClick,
		isSortTodos,
		searchField,
		onFieldSearchChange,
		searchFieldRef,
	} = props;

	const isLoading = useSelector(selectIsLoading);

	return (
		<>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<section className={styles.container}>
					<h1 className={styles.title}>Список дел</h1>
					<div className={styles.containerSearch}>
						<label htmlFor="search">Найти</label>
						<input
							ref={searchFieldRef}
							className={styles.searchField}
							id="search"
							type="text"
							value={searchField}
							onChange={onFieldSearchChange}
						/>
					</div>
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
								<TodoItem key={id} id={id} title={title} />
							))}
						</ul>
					) : (
						<div className={styles.error}>
							<p>Ошибка загрузки </p>
						</div>
					)}
				</section>
			)}
		</>
	);
};
