import styles from './Input.module.css';
import { Error } from '../error/Error';

export const Input = ({
	name,
	type,
	formProp,
	placeholder,
	error,
	repeatPasswordRef,
	register,
	onRepeatPasswordChange,
	onPasswordBlur,
}) => {
	return (
		<>
			{error && <Error>{error}</Error>}
			{name === 'email' && (
				<input
					ref={repeatPasswordRef}
					className={styles.field}
					name={name}
					type={type}
					placeholder={placeholder}
					{...register(name, formProp)}
				/>
			)}
			{name === 'password' && (
				<input
					ref={repeatPasswordRef}
					className={styles.field}
					name={name}
					type={type}
					placeholder={placeholder}
					{...register(name, formProp)}
					onBlur={onPasswordBlur}
				/>
			)}
			{name === 'repeatPassword' && (
				<input
					ref={repeatPasswordRef}
					className={styles.field}
					name={name}
					type={type}
					placeholder={placeholder}
					{...register(name, formProp)}
					onChange={onRepeatPasswordChange}
				/>
			)}
		</>
	);
};
