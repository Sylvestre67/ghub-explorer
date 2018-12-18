import React from 'react';
import { shallow } from 'enzyme';

import { Results } from './index';
let component;

const props = {
	classes: {},
};

describe('Results', () => {
	beforeAll(() => {
		component = shallow(<Results {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
