import styles from './Button.module.css';

export const Button = ({
	name,
	onClickHandle,
	disabledFlag,
	filtersButton,
	itemsButton,
	isSortTodos,
}) => {
	return (
		<button
			className={`${styles.button}
			${filtersButton ? styles.filtersButton : null}
			${itemsButton ? styles.itemsButton : null}
			${isSortTodos ? styles.sorted : null}`}
			disabled={disabledFlag}
			onClick={onClickHandle}
		>
			{name}
		</button>
	);
};
