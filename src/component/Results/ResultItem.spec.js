import React from 'react';
import { shallow } from 'enzyme';

import ResultItem from './ResultItem';
let component;

const props = {
	classes: {},
	item: {},
};

describe('ResultItem', () => {
	beforeAll(() => {
		component = shallow(<ResultItem {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
