import React from 'react';

import Divider from '@material-ui/core/Divider';

import Form from '../component/Form';
import ResultsProvider from '../component/ResultsProvider';
import Results from '../component/Results';

export class Home extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Form />
				<Divider />
				<ResultsProvider>
					<Results />
				</ResultsProvider>
			</React.Fragment>
		);
	}
}

export default Home;
