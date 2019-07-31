import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/App';

describe('App Component Tests', () => {
  it('<App /> renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});