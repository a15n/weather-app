import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component';

it('renders without crashing', () => {
  ReactDOM.render(<Card />, document.createElement('div'));
});
