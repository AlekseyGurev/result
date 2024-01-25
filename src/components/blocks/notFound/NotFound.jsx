import styles from './NotFound.module.css';

const NotFoundLayout = () => {
	return (
		<div className={styles.container}>
			<h1>Страница не найдена ошибка 404 </h1>
		</div>
	);
};

export const NotFound = () => {
	return <NotFoundLayout />;
};
