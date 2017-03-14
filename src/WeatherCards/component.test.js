import React from 'react';
import ReactDOM from 'react-dom';
import WeatherCards from './component';

it('renders without crashing', () => {
  ReactDOM.render(<WeatherCards forecast={[]} />, document.createElement('div'));
});
