import React from 'react';
import App from '../components/App';
import { shallow } from 'enzyme';

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});
});
