import { TodoItem, Todos, NotFound } from '../components';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Todos />} />
				<Route path="/task/:id" element={<TodoItem />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
