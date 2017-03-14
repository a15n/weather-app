import React, { Component } from 'react';
import './App.css';
import { request } from './utils';

// TODO the city select should be it's own component
const cityList = [
  'San Francisco',
  'New York',
  'Boston',
];

class App extends Component {
  constructor() {
    super();

    // https://facebook.github.io/react/docs/refs-and-the-dom.html
    this.state = {
      selectedCity: 'San Francisco', // TODO tie this to localStorage
    }

    this.updateCity = this.updateCity.bind(this);
  }
  componentDidMount() {
    request({url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'})
    .then(data => {
      console.log('request complete');
    });
  }
  updateCity() {
    const selectedCity = this.select.value;
    console.log(selectedCity);
  }
  render() {
    const { selectedCity } = this.state;
    return (
      <div>
        <h2>Hello world</h2>
        <select 
          ref={(input)=> this.select = input}
          defaultValue={selectedCity}
          onChange={this.updateCity} 
        >
          {cityList.map((city, i) => {
            return <option key={i} value={city}>{city}</option>
          })}
        </select>
      </div>
    );
  }
}

export default App;
