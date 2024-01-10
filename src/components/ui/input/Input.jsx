import styles from './Input.module.css';
import { Error } from '../error/Error';

export const Input = ({
	name,
	type,
	login,
	onChange,
	placeholder,
	error,
	onBlur,
	repeatPasswordRef,
}) => {
	return (
		<>
			{error && <Error>{error}</Error>}
			<input
				ref={repeatPasswordRef}
				className={styles.field}
				name={name}
				type={type}
				value={login}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</>
	);
};
