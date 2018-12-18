import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

import Header from './layout/Header';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Typography>Hello World !</Typography>
			</React.Fragment>
		);
	}
}

export default App;
