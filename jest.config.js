var config = {
	setupTestFrameworkScriptFile: './enzyme.setup.js',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	coverageReporters: ['json', 'html', 'lcov', 'text'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
};

module.exports = config;
