import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Header from './layout/Header';
import Footer from './layout/Footer';

import FourOhFour from './routes/FourOhFour';
import Home from './routes/Home';

const styles = theme => ({
	root: {
		height: '100%',
		display: 'flex',
		flexFlow: 'column',
	},
	body: {
		flexGrow: '1',
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'center',
	},
	jumbo: {
		textAlign: 'center',
		padding: `${theme.spacing.unit * 3}px 0`,
	},
});

const site_title = `${
	process.env.REACT_APP_WEBSITE_NAME
} Github Repository Search`;

class App extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Header />
				<div className={classes.body}>
					<Grid container>
						<Grid item xs={12} className={classes.jumbo}>
							<Typography variant="h5">{site_title}</Typography>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Router basename={process.env.PUBLIC_URL}>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route component={FourOhFour} />
								</Switch>
							</Router>
						</Grid>
					</Grid>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(styles)(App);
