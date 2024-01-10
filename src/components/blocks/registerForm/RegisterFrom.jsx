import { RegisterFormLayout } from '../../index';
import { useState, useRef } from 'react';
import * as validation from '../../../utils/validationSchema';
import { sendFormData } from '../../../utils/sendFromData';

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

	const onEmailChange = ({ target }) => {
		setFormData({
			...formData,
			email: target.value,
		});
		const newError = validation.validateAndGetErrorMessage(
			validation.emailChangeSchema,
			target.value,
		);
		setEmailError(newError);
		checkedForm();
	};

	const onPasswordChange = ({ target }) => {
		setFormData({
			...formData,
			password: target.value,
		});
		const newError = validation.validateAndGetErrorMessage(
			validation.passwordChangeSchema,
			target.value,
		);
		setPasswordError(newError);
		checkedForm();
	};

	const onBlurPassword = () => {
		const newError = validation.validateAndGetErrorMessage(
			validation.repeatPasswordChangeSchema,
			formData.password !== repeatPasswordRef.current,
		);
		setRepeatPasswordError(newError);
		checkedForm();
	};

	const onRepeatPasswordChange = ({ target }) => {
		repeatPasswordRef.current = target.value;
		const newError = validation.validateAndGetErrorMessage(
			validation.repeatPasswordChangeSchema,
			formData.password !== repeatPasswordRef.current,
		);
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
			repeatPassword={repeatPasswordRef}
			repeatPasswordError={repeatPasswordError}
			onSubmit={onSubmit}
			onLoginChange={onEmailChange}
			onPasswordChange={onPasswordChange}
			onRepeatPasswordChange={onRepeatPasswordChange}
			isChecked={isChecked}
			submitButtonRef={submitButtonRef}
		/>
	);
};
