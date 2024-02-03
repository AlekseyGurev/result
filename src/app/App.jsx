import { Todos } from '../components';
import { useState } from 'react';
import { AppContext } from '../context/context';

const getRefreshTodos = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);

	return { refreshTodos, setRefreshTodos };
};

function App() {
	const refresTodos = getRefreshTodos();

	return (
		<AppContext.Provider value={refresTodos}>
			<Todos />
		</AppContext.Provider>
	);
}

export default App;
