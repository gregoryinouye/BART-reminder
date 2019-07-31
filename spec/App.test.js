import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/App';

describe('App Component Tests', () => {
  it('<App /> renders', () => {
    shallow(<App />);
  });
});