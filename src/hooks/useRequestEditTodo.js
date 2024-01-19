import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../utilities/firebase';

export const useRequestEditTodo = () => {
	const [isSaving, setIsSaving] = useState(false);

	const requestEditTodo = (id, editTodo) => {
		setIsSaving(true);

		const todosDbRef = ref(db, `todos/${id}`);
		set(todosDbRef, {
			title: editTodo,
		})
			.then(() => {
				console.log('Запись обновлена');
			})
			.catch((error) => console.log(error))
			.finally(() => setIsSaving(false));
	};

	return { requestEditTodo, isSaving };
};
