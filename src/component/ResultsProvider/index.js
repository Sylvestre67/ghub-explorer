import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import debounce from 'lodash.debounce';

import { ResultsContext } from '../../context/results.context';

import { queryfy } from '../../utils/utils';
import { createRequest } from '../../utils/api';

export class ResultsProvider extends React.Component {
	constructor(props) {
		super(props);
		this.updateResults = debounce(this.updateResults, 600);
		this.state = {
			isFetching: true,
			results: {},
		};
	}

	componentDidMount() {
		// initial pre-fetch
		this.updateResults();
	}

	componentDidUpdate(prevProps, prevState) {
		const { location } = this.props;

		if (location.key !== prevProps.location.key) {
			this.updateResults();
		}
	}

	updateResults() {
		const { location } = this.props;
		const { search } = location;
		this.setState({ isFetching: true });

		return createRequest({
			method: 'GET',
			url: `${process.env.REACT_APP_GITHUB_ENDPOINT}search/repositories`,
			headers: {
				Authorization: `token ${process.env.REACT_APP_GHUB_TOKEN}`,
			},
			params: queryfy(qs.parse(search.slice(1))),
		}).then(res => {
			this.setState({ isFetching: false, results: JSON.parse(res) });
		});
	}

	render() {
		const { results, isFetching } = this.state;
		return (
			<ResultsContext.Provider value={{ results, isFetching }}>
				{this.props.children}
			</ResultsContext.Provider>
		);
	}
}

export default withRouter(ResultsProvider);
