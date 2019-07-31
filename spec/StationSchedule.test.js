import React from 'react';
import { shallow, mount, render } from 'enzyme';
import StationSchedule from '../client/src/StationSchedule';

describe('StationSchedule Component Tests', () => {
  it('<StationSchedule /> renders', () => {
    const wrapper = shallow(<StationSchedule etd={''}
      handleChange={() => {}}
      setReminder={() => {}}
      stationName={''}
      time={''}/>);
    expect(wrapper.exists()).toBe(true);
  });
});