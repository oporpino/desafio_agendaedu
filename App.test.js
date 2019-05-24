import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has only 1 child', () => {
    const tree = shallow(<App />);
    expect(tree.children.length).toBe(1);
    expect(tree).toMatchSnapshot();
  });
});
