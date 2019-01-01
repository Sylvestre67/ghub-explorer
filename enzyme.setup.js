require('raf/polyfill');

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

process.env.REACT_APP_GITHUB_ORG = 'TESTING';

enzyme.configure({ adapter: new Adapter() });
