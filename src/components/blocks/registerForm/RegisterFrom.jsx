import { RegisterFormLayout } from '../../index';
import { useState, useRef } from 'react';

const sendFormData = (formData) => {
	console.log(formData);
};

export const RegisterForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [repeatPasswordError, setRepeatPasswordError] = useState(null);

	const repeatPasswordRef = useRef('');
	const submitButtonRef = useRef('');
	const [isChecked, setIsChecked] = useState(true);

	const onLoginChange = ({ target }) => {
		setFormData({
			...formData,
			email: target.value,
		});
		let newError = null;
		if (!/.+@.+\..+/i.test(target.value)) {
			newError = 'Неверный формат email';
		}
		setEmailError(newError);
		checkedForm();
	};

	const onPasswordChange = ({ target }) => {
		setFormData({
			...formData,
			password: target.value,
		});
		let newError = null;

		if (!/^[\w_]*$/.test(target.value)) {
			newError =
				'Неверный пароль. Допустимые символы: буквы(латинские), цифры и нижнее подчёркивание';
		} else if (target.value.length > 20) {
			newError = 'Неверный пароль. Должно быть не больше 20 символов';
		} else if (target.value.length < 3) {
			newError = 'Неверный пароль. Должно быть больше 3 символов';
		}
		setPasswordError(newError);
		checkedForm();
	};

	const onBlurPassword = () => {
		let newError = null;
		if (formData.password !== repeatPasswordRef.current) {
			newError = 'Пароли не совпадают';
			// repeatPasswordRef.current.focus();
		}
		setRepeatPasswordError(newError);
		checkedForm();
	};

	const onRepeatPasswordChange = ({ target }) => {
		repeatPasswordRef.current = target.value;

		let newError = null;
		if (formData.password !== repeatPasswordRef.current) {
			newError = 'Пароли не совпадают';
		}

		setRepeatPasswordError(newError);
		checkedForm();
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData(formData);
	};

	const checkedForm = () => {
		if (
			formData.email !== '' &&
			emailError === null &&
			formData.password !== '' &&
			formData.password === repeatPasswordRef.current
		) {
			setIsChecked(false);
			// submitButtonRef.current.focus();
		} else {
			setIsChecked(true);
		}
	};

	return (
		<RegisterFormLayout
			formData={formData}
			loginError={emailError}
			passwordError={passwordError}
			onBlurPassword={onBlurPassword}
			repeatPasswordError={repeatPasswordError}
			onSubmit={onSubmit}
			onLoginChange={onLoginChange}
			onPasswordChange={onPasswordChange}
			onRepeatPasswordChange={onRepeatPasswordChange}
			isChecked={isChecked}
			submitButtonRef={submitButtonRef}
			repeatPasswordRef={repeatPasswordRef}
		/>
	);
};
