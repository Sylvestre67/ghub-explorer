import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
let component;

const props = {};

describe('App', () => {
	beforeAll(() => {
		component = shallow(<App {...props} />);
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});
});
