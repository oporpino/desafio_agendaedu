import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Login from '../../src/pages/login';

describe('<Login />', () => {
  const login = shallow(<Login />);

  it('has login input', () => {
    expect(toJson(login.find('#emailInput'))).not.toBe(null);

    expect(login).toMatchSnapshot();
  });

  it('has password input', () => {
    expect(toJson(login.find('#passwordInput'))).not.toBe(null);

    expect(login).toMatchSnapshot();
  });
});
