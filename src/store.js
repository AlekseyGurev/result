import { createStore } from 'redux';
import { gameReducer } from './gameReducer';

export let store = createStore(gameReducer);
