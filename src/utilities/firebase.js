import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDS-qhOnPZT0M0BeDnN8AYp4p7bQbBBafg',
	authDomain: 'todo-38467.firebaseapp.com',
	databaseURL: 'https://todo-38467-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'todo-38467',
	storageBucket: 'todo-38467.appspot.com',
	messagingSenderId: '1045947670841',
	appId: '1:1045947670841:web:50bc4f2fef3003db3548e8',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
