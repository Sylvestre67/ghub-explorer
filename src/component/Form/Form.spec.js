import React from 'react';
import { shallow } from 'enzyme';

import { Form } from './index';
let component;

const props = {
	classes: {},
};

describe('Form', () => {
	beforeAll(() => {
		component = shallow(<Form {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
