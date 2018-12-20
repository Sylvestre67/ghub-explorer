import React from 'react';
import { shallow } from 'enzyme';

import { ResultsProvider } from './index';
let component;

const props = {};

describe('ResultsProvider', () => {
	beforeAll(() => {
		component = shallow(<ResultsProvider />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
