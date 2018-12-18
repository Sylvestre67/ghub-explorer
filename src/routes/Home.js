import React from 'react';
import PropTypes from 'prop-types';

import Form from '../component/Form';
import Results from '../component/Results';

export class Home extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<Form />
				<Results />
			</React.Fragment>
		);
	}
}

export default Home;
