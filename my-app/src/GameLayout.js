import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import PropTypes from 'prop-types';
import styles from './Game.module.css';

export const GameLayout = (gameState) => {
	return (
		<div className={styles.game}>
			<Information {...gameState} />
			<Field {...gameState} />
			<button className={styles.resetButton} onClick={gameState.gameReset}>
				Начать игру сначала
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
	currentMessage: PropTypes.string,
	gameReset: PropTypes.func,
};
