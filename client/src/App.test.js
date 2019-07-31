import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
  it('<App /> renders without crashing', () => {
    shallow(<App />);
  });
});