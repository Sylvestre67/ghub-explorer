import React from 'react';

import Divider from '@material-ui/core/Divider';

import Form from '../component/Form';
import Results from '../component/Results';

export class Home extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Form />
				<Divider />
				<Results />
			</React.Fragment>
		);
	}
}

export default Home;
