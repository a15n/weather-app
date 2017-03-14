import React, { Component } from 'react';
import './App.css';
import { request } from './utils';
import WeatherCards from './WeatherCards';

// TODO the city select should be it's own component
const cityList = [
  'San Francisco, CA',
  'New York City, NY',
  'Boston, MS',
];

class App extends Component {
  constructor() {
    super();

    // https://facebook.github.io/react/docs/refs-and-the-dom.html
    this.state = {
      selectedCity: localStorage.getItem('selectedCity') || 'San Francisco', // TODO tie this to localStorage
      selectedCityForecast: [],
    }

    this.updateCity = this.updateCity.bind(this);
  }
  componentDidMount() {
    this.getForcast();
  }
  getForcast() {
    // https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="San Francisco, CA")&format=json
    const yahooUrl=`https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${this.state.selectedCity}")&format=json`;
    console.log(yahooUrl);

    request({url: yahooUrl}).then(dataString => {
      const data = JSON.parse(dataString);
      const forecast = data.query.results.channel;
      this.setState({selectedCityForecast: forecast});
    });
  }
  updateCity() {
    const selectedCity = this.select.value;
    localStorage.setItem('selectedCity', selectedCity);
    this.setState({selectedCity});
    this.getForcast();
  }
  render() {
    const { selectedCity, selectedCityForecast } = this.state;
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

        <WeatherCards forecast={selectedCityForecast}></WeatherCards>
      </div>
    );
  }
}

export default App;
