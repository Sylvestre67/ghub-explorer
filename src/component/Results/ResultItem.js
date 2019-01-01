import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
	root: {
		margin: theme.spacing.unit,
	},
	item: {
		padding: theme.spacing.unit,
		border: '1px solid #eeeeee',
		'&:not(:first-child)': {
			'& p': {
				textAlign: 'center',
			},
		},
	},
	forked: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		fontSize: 14,
		padding: theme.spacing.unit * 0.5,
		float: 'right',
		width: '70px',
		' & p': {
			textAlign: 'center',
			color: 'white',
		},
	},
});

function ResultItem(props) {
	const { classes, item } = props;
	return (
		<Paper className={classes.root} elevation={0}>
			<Grid container>
				<Grid item xs={12} sm={8} className={classes.item}>
					{item.fork && (
						<span className={classes.forked}>
							<Typography>Forked</Typography>
						</span>
					)}
					<Typography color="primary" gutterBottom>
						{item.name}
					</Typography>
					<Typography>{item.description}</Typography>
				</Grid>
				<Grid item xs={12} sm={2} className={classes.item}>
					<Typography>Stars</Typography>
					<Typography>{item.stargazers_count}</Typography>
				</Grid>
				<Grid item xs={12} sm={2} className={classes.item}>
					<Typography>License</Typography>
					<Typography>
						{item.license ? item.license.name : 'N/A'}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}

ResultItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultItem);
