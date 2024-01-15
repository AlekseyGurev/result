import { TodoItem } from '../../index';
import styles from './TodoLayout.module.css';

export const TodoLayout = (props) => {
	const { todos, isLoading } = props;
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Список дел</h1>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : todos ? (
				<ul>
					{todos.map(({ id, title }) => (
						<TodoItem key={id} title={title} />
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
