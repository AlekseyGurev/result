import styles from './AddTodo.module.css';

export const AddTodo = ({ fieldInput, onFieldInputChange }) => {
	return (
		<input
			value={fieldInput}
			className={styles.field}
			onChange={onFieldInputChange}
			type="text"
		/>
	);
};
