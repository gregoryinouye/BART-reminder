import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StationLine from '../client/src/StationLine';

describe('StationLine Component Tests', () => {
  it('<StationLine /> renders', () => {
    const wrapper = shallow(<StationLine routeName='' min={[]} key='0' handleChange={() => {}}/>);
    expect(wrapper.exists()).toBe(true);
  });
});