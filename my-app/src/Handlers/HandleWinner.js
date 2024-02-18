// export const handleWinner = (field) => {
// 	const wins = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8], // Варианты побед по горизонтали
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8], // Варианты побед по вертикали
// 		[0, 4, 8],
// 		[2, 4, 6], // Варианты побед по диагонали
// 	];
// 	const xArray = field.map((el, index) => (el === 'X' ? index : '')).filter((el) => el);
// 	const oArray = field.map((el, index) => (el === 'O' ? index : '')).filter((el) => el);
// 	const draw = field.every((el) => el);
// 	const xWin = wins.some((winSet) => winSet.every((winNum) => xArray.includes(winNum)));
// 	const oWin = wins.some((winSet) => winSet.every((winNum) => oArray.includes(winNum)));
// 	if (draw) {
// 		console.log("draw")
// 		return 'draw';
// 	}
// 	if (xWin) {
// 		console.log('X')

// 		return 'X';
// 	}
// 	if (oWin) {
// 		console.log('O')

// 		return 'O';
// 	}
// 	return false;
// };
// if (winner === 'X' || winner === 'O') {
// 	gameState.setIsGameEnded(true);
// 	gameState.setCurrentPlayer(winner);
// }
// if (winner === 'draw') {
// 	gameState.setIsGameEnded(true);
// 	gameState.setIsDrow(true);
// }
