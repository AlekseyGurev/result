import { AddTodo, Button } from '../../index';
import { Link } from 'react-router-dom';

import styles from './TodoLayout.module.css';

export const TodoLayout = (props) => {
	const {
		todos,
		isLoading,
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
	console.log(todos);
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
					{todos ? (
						<ul>
							{todos.map(({ id, title }) => (
								<li key={id} className={styles.todoItem}>
									<Link
										className={styles.todoItemLink}
										to={`task/${id}`}
									>
										{title}
									</Link>
								</li>
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
