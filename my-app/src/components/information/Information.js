import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = (gameState) => {
	return <InformationLayout {...gameState} />;
};

Information.propTypes = {
	currentMessage: PropTypes.string,
};
