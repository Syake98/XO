import React from 'react';
import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = (gameState) => {
	const handleWinner = (field) => {
		const wins = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		const xArray = field
			.map((el, index) => (el === 'X' ? index : ''))
			.filter((el) => el);

		const oArray = field
			.map((el, index) => (el === 'O' ? index : ''))
			.filter((el) => el);

		const draw = field.every((el) => el);

		const xWin = wins.some((winSet) =>
			winSet.every((winNum) => xArray.includes(winNum)),
		);

		const oWin = wins.some((winSet) =>
			winSet.every((winNum) => oArray.includes(winNum)),
		);
		if (draw) {
			return 'draw';
		}
		if (xWin) {
			return 'X';
		}
		if (oWin) {
			return 'O';
		}
		return false;
	};

	const handleChange = (e) => {
		if (e.target.textContent || gameState.isGameEnded || gameState.isDraw) {
			return;
		}
		gameState.setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
		gameState.setField((prev) => {
			const newField = prev.with(+e.target.dataset.id, gameState.currentPlayer);
			const winner = handleWinner(newField);
			if (winner === 'X' || winner === 'O') {
				gameState.setIsGameEnded(true);
				gameState.setCurrentPlayer(winner);
			} else if (winner === 'draw') {
				gameState.setIsDraw(true);
			}
			return newField;
		});
	};

	return <FieldLayout field={gameState.field} onClick={handleChange} />;
};

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
