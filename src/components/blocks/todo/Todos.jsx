import { TodoLayout } from '../../index';
import { useRequestGetTodos } from '../../index';

export const Todos = () => {
	const { todos, isLoading } = useRequestGetTodos();
	return <TodoLayout todos={todos} isLoading={isLoading} />;
};
