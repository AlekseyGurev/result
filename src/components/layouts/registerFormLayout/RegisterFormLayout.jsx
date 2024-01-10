import styles from './RegisterFormLayout.module.css';
import { Input } from '../../index';

export const RegisterFormLayout = ({
	formData,
	loginError,
	passwordError,
	repeatPasswordError,
	onLoginChange,
	onPasswordChange,
	onRepeatPasswordChange,
	onSubmit,
	onBlurPassword,
	isChecked,
	submitButtonRef,
	repeatPasswordRef,
}) => {
	const { email, password } = formData;
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Форма регистрации</h1>
			<form onSubmit={onSubmit}>
				<Input
					name={'email'}
					type={'text'}
					value={email}
					placeholder={'Логин'}
					onChange={onLoginChange}
					error={loginError}
				/>
				<Input
					name={'password'}
					type={'password'}
					value={password}
					placeholder={'Пароль'}
					onChange={onPasswordChange}
					onBlur={onBlurPassword}
					error={passwordError}
				/>
				<Input
					name={'repeatPassword'}
					type={'password'}
					placeholder={'Повтор пароля'}
					onChange={onRepeatPasswordChange}
					error={repeatPasswordError}
					repeatPasswordRef={repeatPasswordRef}
				/>

				<button
					ref={submitButtonRef}
					className={styles.button}
					type="submit"
					disabled={isChecked}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
