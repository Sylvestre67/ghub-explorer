import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';

import { Form } from './index';
let component;
let instance;

const props = {
	classes: {},
	history: {
		replace: jest.fn(),
		push: jest.fn(),
	},
	location: {
		search: '',
		pathname: 'testing',
	},
};

describe('Form', () => {
	beforeAll(() => {
		component = shallow(<Form {...props} />);
		instance = component.instance();
	});

	it('should render correctly', () => {
		expect(component).toMatchSnapshot();
	});

	describe('Handle form updates', () => {
		it('should update the state with the tested value if not a checkbox', () => {
			instance.handleChange({
				target: { id: 'testing', value: 'tested_value' },
			});
			expect(component.state('testing')).toEqual('tested_value');
		});

		it('should update the state with the boolean if checkbox', () => {
			instance.handleChange({
				target: { id: 'testing', checked: true },
			});
			expect(component.state('testing')).toBeTruthy();
		});
	});

	describe('Click on Submit', () => {
		it('should update the location with the coresponding state values', () => {
			component.find(Button).simulate('click');
			expect(props.history.push).toHaveBeenCalledWith({
				path: 'testing',
				search: 'q=&license=&forked=true&stars=',
			});
		});
	});
});
