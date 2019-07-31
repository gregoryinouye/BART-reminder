import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StationForm from '../client/src/StationForm';

describe('StationForm Component Tests', () => {
  it('<StationForm /> renders', () => {
    const wrapper = shallow(<StationForm handleChange={() => {}} handleSubmit={() => {}} stationList={[]}/>);
    expect(wrapper.exists()).toBe(true);
  });
});