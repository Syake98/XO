import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	let currentMessage = '';
	if (isDraw) {
		currentMessage = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		currentMessage = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		currentMessage = `Ходит: ${currentPlayer}`;
	}

	const gameReset = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField((prev) => [...prev].fill(''));
	};

	const gameState = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		currentMessage,
		gameReset,
	};

	return <GameLayout {...gameState} />;
};
