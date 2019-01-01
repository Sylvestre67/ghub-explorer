import { queryfy } from './utils';
let stringified;

describe('queryfy', () => {
	it('should render correctly', () => {
		stringified = queryfy({ q: 'testing' });
		expect(stringified).toEqual('q=testing+org:TESTING');
	});

	it('should render correctly', () => {
		stringified = queryfy({ q: 'testing', stars: '>500' });
		expect(stringified).toEqual('q=testing+org:TESTING+stars:>500');
	});
});
