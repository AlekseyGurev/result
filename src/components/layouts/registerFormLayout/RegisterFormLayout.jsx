import styles from './RegisterFormLayout.module.css';
import { Input } from '../../index';

export const RegisterFormLayout = ({
	emailError,
	register,
	onPasswordBlur,
	repeatPasswordRef,
	submitButtonRef,
	repeatPasswordError,
	passwordError,
	handleSubmit,
	onRepeatPasswordChange,
	emailProps,
	repeatPasswordProps,
	passwordProps,
	errors,
}) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Форма регистрации</h1>
			<form onSubmit={handleSubmit}>
				<Input
					name={'email'}
					type={'text'}
					placeholder={'Email'}
					register={register}
					formProp={emailProps}
					error={emailError}
				/>
				<Input
					name={'password'}
					type={'password'}
					placeholder={'Пароль'}
					register={register}
					onPasswordBlur={onPasswordBlur}
					formProp={passwordProps}
					error={passwordError}
				/>
				<Input
					name={'repeatPassword'}
					type={'password'}
					placeholder={'Повтор пароля'}
					register={register}
					formProp={repeatPasswordProps}
					repeatPasswordRef={repeatPasswordRef}
					onRepeatPasswordChange={onRepeatPasswordChange}
					error={repeatPasswordError}
				/>

				<button
					ref={submitButtonRef}
					className={styles.button}
					disabled={Object.keys(errors).length > 0}
					type="submit"
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
