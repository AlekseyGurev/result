import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../utilities/firebase';

export const useRequestDeleteTodo = () => {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodo = (id) => {
		setIsDeleting(true);

		const todosDbRef = ref(db, `todos/${id}`);

		remove(todosDbRef)
			.then(() => {
				console.log('Запись удалена');
			})
			.catch((error) => console.log(error))
			.finally(() => setIsDeleting(false));
	};

	return { requestDeleteTodo, isDeleting };
};
