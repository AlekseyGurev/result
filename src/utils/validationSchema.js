import * as yup from 'yup';

export const emailChangeSchema = yup.string().email('Неверный формат email');

export const passwordChangeSchema = yup
	.string()
	.matches(
		/^[\w_]*$/,
		'Неверный пароль. Допустимые символы: буквы(латинские), цифры и нижнее подчёркивание',
	)
	.min(3, 'Неверный пароль. Должно быть не меньше 3 символов')
	.max(20, 'Неверный пароль. Должно быть не больше 20 символов');

export const repeatPasswordChangeSchema = yup
	.string()
	.matches('false', 'Пароли не совпадают');

export const validateAndGetErrorMessage = (schema, value) => {
	let errorMessage = null;

	try {
		schema.validateSync(value);
	} catch ({ errors }) {
		errorMessage = errors.reduce((message, error) => message + error, '').trim();
	}

	return errorMessage;
};
