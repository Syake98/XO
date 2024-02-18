import { useState } from 'react';
import { GameLayout } from './GameLayout';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDrow, setIsDrow] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	let winnerSign = '';

	if (isDrow) {
		winnerSign = 'Ничья';
	} else if (!isDrow && isGameEnded) {
		winnerSign = `Победа: ${currentPlayer}`;
	} else if (!isDrow && !isGameEnded) {
		winnerSign = `Ходит: ${currentPlayer}`;
	}

	const gameState = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDrow,
		setIsDrow,
		field,
		setField,
		winnerSign
	};

	return <GameLayout {...gameState}/>;
};
