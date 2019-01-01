import React, { lazy } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { ResultsContext } from '../../context/results.context';

import ResultItem from './ResultItem';

const styles = theme => ({
	empty: {
		padding: `${theme.spacing.unit}px 0px`,
	},
	loading: {
		padding: theme.spacing.unit,
		textAlign: 'center',
	},
});

class Results extends React.Component {
	renderItems() {
		const { classes } = this.props;
		const { results, isFetching } = this.context;
		const { items } = results;

		if (!isFetching && items.length) {
			return items.map(item => <ResultItem key={item.id} item={item} />);
		}

		if (!isFetching && items.length === 0) {
			return (
				<Typography className={classes.empty}>
					No Respositories found.
				</Typography>
			);
		}

		return (
			<div className={classes.loading}>
				<CircularProgress className={classes.loading} />
			</div>
		);
	}
	render() {
		return <React.Fragment>{this.renderItems()}</React.Fragment>;
	}
}

Results.contextType = ResultsContext;

Results.propTypes = {};

export default withStyles(styles)(Results);
