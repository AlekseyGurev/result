import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormLayout } from '../../index';

export const RegisterForm = () => {
	const {
		register,
		getValues,
		setValue,
		setError,
		clearErrors,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
	});

	const emailProps = {
		required: {
			value: true,
			message: 'Поле не должно быть пустым',
		},
		pattern: {
			value: /.+@.+\..+/i,
			message: 'Неверный формат email',
		},
	};

	const passwordProps = {
		required: {
			value: true,
			message: 'Неверный пароль. Должно быть не меньше 3 символов',
		},
		minLength: {
			value: 3,
			message: 'Неверный пароль. Должно быть не меньше 3 символов',
		},
		maxLength: {
			value: 20,
			message: 'Неверный пароль. Должно быть не больше 20 символов',
		},
		pattern: {
			value: /^[\w_]*$/,
			message:
				'Неверный пароль. Допустимые символы: буквы(латинские), цифры и нижнее подчёркивание',
		},
	};

	const repeatPasswordProps = {
		required: {
			value: true,
			message: 'Неверный пароль. Должно быть не меньше 3 символов',
		},
	};

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	const submitButtonRef = useRef('');
	const repeatPasswordRef = useRef('');

	useEffect(() => {
		getValues('email') !== '' &&
			getValues('password') !== '' &&
			Object.keys(errors).length === 0 &&
			submitButtonRef.current.focus();
	}, [getValues()]);

	const setErrorRepeatPassword = () => {
		if (getValues('password') !== repeatPasswordRef.current) {
			setError('repeatPassword', {
				type: 'custom',
				message: 'Пароли не совпадают',
			});
		} else {
			setValue('repeatPassword', repeatPasswordRef.current);
			clearErrors('repeatPassword');
		}
	};

	const onRepeatPasswordChange = ({ target }) => {
		repeatPasswordRef.current = target.value;
		setErrorRepeatPassword();
	};

	const onPasswordBlur = () => {
		setErrorRepeatPassword();
	};

	const sendFormData = (formData) => {
		console.log(formData);
	};

	return (
		<RegisterFormLayout
			emailError={emailError}
			register={register}
			onPasswordBlur={onPasswordBlur}
			repeatPasswordRef={repeatPasswordRef}
			onRepeatPasswordChange={onRepeatPasswordChange}
			submitButtonRef={submitButtonRef}
			repeatPasswordError={repeatPasswordError}
			passwordError={passwordError}
			handleSubmit={handleSubmit(sendFormData)}
			emailProps={emailProps}
			passwordProps={passwordProps}
			repeatPasswordProps={repeatPasswordProps}
			errors={errors}
		/>
	);
};
