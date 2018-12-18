import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

import Header from './layout/Header';
import Footer from './layout/Footer';

const styles = theme => ({
	root: {
		height: '100%',
		display: 'flex',
		flexFlow: 'column',
	},
	body: {
		flexGrow: '1',
		backgroundColor: 'white',
	},
});

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Header />
				<div className={classes.body}>
					<Typography>Hello World !</Typography>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(styles)(App);
