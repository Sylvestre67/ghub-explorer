import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const isEven = process.env.REACT_APP_IS_EVEN;

const styles = theme => ({
	grow: {
		flexGrow: 1,
	},
	img: {
		width: '50px',
		height: 'auto',
	},
});

export function Header(props) {
	const { classes } = props;

	return (
		<AppBar position="relative" elevation={0}>
			<Toolbar>
				{isEven ? (
					<div>
						<img
							className={classes.img}
							src={`${process.env.PUBLIC_URL}/img/even.png`}
							alt="even"
						/>
					</div>
				) : (
					<Typography
						variant="h6"
						color="inherit"
						className={classes.grow}>
						GHub Explorer
					</Typography>
				)}
			</Toolbar>
		</AppBar>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
