import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Train from '../client/src/Train';

describe('Train Component Tests', () => {
  it('<Train /> renders', () => {
    const wrapper = shallow(<Train route={''} min={[]} key={''} handleChange={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});