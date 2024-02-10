import { GameLayout } from '../../layouts/gameLayout/GameLayout';
import { store } from '../../../store/store';
import { useEffect, useState } from 'react';

export const Game = () => {
	const [reload, setReload] = useState(false);

	useEffect(() => {
		store.subscribe(() => setReload(!reload));
	}, [reload]);

	return <GameLayout />;
};
