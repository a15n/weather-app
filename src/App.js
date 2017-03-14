import React, { Component } from 'react';
import './App.css';
import { request } from './utils';

class App extends Component {
  componentDidMount() {
    request({url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'})
    .then(data => {
      console.log(JSON.parse(data));
    });
  }
  render() {
    return (
      <h2>Hello world</h2>
    );
  }
}

export default App;
