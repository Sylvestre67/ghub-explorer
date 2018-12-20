import React from 'react';
// import PropTypes from 'prop-types';
import { ResultsContext } from '../../context/results.context';

export class Results extends React.Component {
	render() {
		return <div>{JSON.stringify(this.context, 4, 4)}</div>;
	}
}

Results.contextType = ResultsContext;

Results.propTypes = {};

export default Results;
