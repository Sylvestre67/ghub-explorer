import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const isEven = process.env.REACT_APP_IS_EVEN;

const styles = theme => ({
	footer: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		'& > div': {
			justifyContent: 'center',
		},
	},
});

export function Footer(props) {
	const { classes } = props;

	return (
		<footer className={classes.footer}>
			<Toolbar elevation={0}>
				<Typography variant="caption" color="inherit">
					{isEven
						? 'Ⓒ 2017 Even Financial, Inc. - CONFIDENTIAL'
						: 'Made With Love in NYC'}
				</Typography>
			</Toolbar>
		</footer>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
