import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../utilities/firebase';

export const useRequestAddTodo = (fieldInput, setFieldInput) => {
	const [isCreating, setIsCreating] = useState(false);
	const requestAddTodo = () => {
		setIsCreating(true);

		const todosDbRef = ref(db, 'todos');
		push(todosDbRef, {
			title: fieldInput,
		})
			.then(() => {
				console.log('Запись добавлена');
				setFieldInput('');
			})
			.catch((error) => console.log(error))
			.finally(() => setIsCreating(false));
	};

	return { requestAddTodo, isCreating };
};
