import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserLogin from '../client/src/UserLogin';

describe('UserLogin Component Tests', () => {
  it('<UserLogin /> renders', () => {
    const wrapper = shallow(<UserLogin handleChange={() => {}} handleSubmit={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});