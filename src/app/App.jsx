import { useState } from 'react';
import { RegisterForm } from '../components/index';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<RegisterForm />
		</>
	);
}

export default App;
