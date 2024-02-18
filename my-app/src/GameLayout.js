import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import PropTypes from 'prop-types'
import styles from './Game.module.css';

export const GameLayout = (gameState) => {
	return (
		<div className={styles.game}>
			<Information {...gameState} />
			<Field {...gameState} />
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	status: PropTypes.string,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
};
