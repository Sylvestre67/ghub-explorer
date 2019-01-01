import React from 'react';
import { shallow } from 'enzyme';

import { ResultsProvider } from './index';
let component;

const props = {
	location: {
		search: 'testing',
	},
};

describe('ResultsProvider', () => {
	beforeAll(() => {
		component = shallow(<ResultsProvider {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
