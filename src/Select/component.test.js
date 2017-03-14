import React from 'react';
import ReactDOM from 'react-dom';
import Select from './component';

it('renders without crashing', () => {
  ReactDOM.render(<Select options={[]} />, document.createElement('div'));
});
