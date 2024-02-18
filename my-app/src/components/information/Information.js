import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { handleInfo } from '../../Handlers';

export const Information = (gameState) => {
	return <InformationLayout {...gameState} />;
};

// Information.propTypes = {
// 	text: PropTypes.string,
// };
// if (isDrow) {
// 	return 'Ничья';
// } else if (!isDrow && isGameEnded) {
// 	return `Победа: ${currentPlayer}`;
// } else if (!isDrow && !isGameEnded) {
// 	return `Ходит: ${currentPlayer}`;
// }
