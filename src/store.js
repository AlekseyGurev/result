import { createStore, combineReducers } from 'redux';
import { userReducer, productsReducer } from './reducers';

const reducer = combineReducers({
	userState: userReducer,
	productsState: productsReducer,
});

export const store = createStore(reducer);
