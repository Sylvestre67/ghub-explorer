import React from 'react';
import { shallow } from 'enzyme';

import { Home } from './Home';
let component;

const props = {
	classes: {},
};

describe('Home', () => {
	beforeAll(() => {
		component = shallow(<Home {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
