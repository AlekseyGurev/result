import { GameLayout } from '../../layouts/gameLayout/GameLayout';
import { useEffect, useState } from 'react';
import { store } from '../../../store.js';

export const Game = () => {
	const [game, setGame] = useState(false);
	useEffect(() => {
		store.subscribe(() => {
			setGame(!game);
		});
	}, [game]);

	return <GameLayout />;
};
