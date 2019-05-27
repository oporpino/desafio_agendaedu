import React from 'react';
import { shallow, mount } from 'enzyme';

import toJson from 'enzyme-to-json';

import Login from '../../src/pages/login';

describe('<Login />', () => {
  describe('inputs', () => {
    let wrapper = null;
    beforeAll(() => {
      wrapper = shallow(<Login />);
    });

    it('has login input', () => {
      expect(toJson(wrapper.find('#emailInput'))).not.toBe(null);

      expect(wrapper).toMatchSnapshot();
    });

    it('has password input', () => {
      expect(toJson(wrapper.find('#passwordInput'))).not.toBe(null);

      expect(wrapper).toMatchSnapshot();
    });

    it('has login button', () => {
      expect(toJson(wrapper.find('#loginButton'))).not.toBe(null);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when navigate', () => {
    let wrapper = null;
    const mock = jest.fn(async () => {
      wrapper.instance().afterLogin('@123456');
    });
    const mockNavigate = jest.fn();

    beforeEach(() => {
      wrapper = mount(<Login />);
      wrapper.instance().login = mock;

      wrapper.setProps({
        navigation: {
          navigate: mockNavigate
        }
      });
      wrapper.instance().forceUpdate();
    });

    afterEach(() => {
      mock.mockClear();
      mockNavigate.mockClear();
    });

    it('calls login when press button', () => {
      const button = wrapper.find('#loginButton').first();
      button.instance().props.onPress();

      expect(mock).toHaveBeenCalled();
    });

    it('navigate to Main with valid attributes', async () => {
      const button = wrapper.find('#loginButton').first();
      await button.instance().props.onPress();

      expect(wrapper.instance().props.navigation.navigate).toHaveBeenCalledWith(
        'Events'
      );
    });

    it('stay with invalid attributes', () => {
      wrapper.instance().afterLogin = jest.fn();
      wrapper.instance().forceUpdate();
      const button = wrapper.find('#loginButton').first();
      button.instance().props.onPress();

      expect(
        wrapper.instance().props.navigation.navigate
      ).not.toHaveBeenCalled();
    });
  });
});
