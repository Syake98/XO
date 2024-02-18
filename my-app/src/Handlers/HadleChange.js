// import { handleWinner } from './HandleWinner';

// export const handleChange = (e, gameState) => {
// 	if (e.target.textContent || gameState.isDrow || gameState.isGameEnded) {
// 		return;
// 	}
// 	gameState.setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
// 	gameState.setField((prev) => {
// 		const newField = prev.with(+e.target.dataset.id, gameState.currentPlayer);
// 		const winner = handleWinner(newField);
// 		console.log('winner', winner);
// 		if (winner === 'X' || winner === 'O') {
// 			gameState.setIsGameEnded(true);
// 			// gameState.setCurrentPlayer(winner);
// 		} else if (winner === 'draw') {
// 			gameState.setIsGameEnded(true);
// 			gameState.setIsDrow(true);
// 		}
// 		return newField;
// 	});
// };
