import React, { Component } from 'react';
import './App.css';
import { request } from './utils';
import WeatherCards from './WeatherCards/component';

// TODO the city select should be it's own component
const cityList = [
  'San Francisco, CA',
  'New York City, NY',
  'Boston, MA',
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: localStorage.getItem('selectedCity') || 'San Francisco', // TODO tie this to localStorage
      selectedCityForecast: [],
    }

    this.updateCity = this.updateCity.bind(this);
  }
  componentDidMount() {
    this.getForcast(this.state.selectedCity);
  }
  getForcast(selectedCity) {
    // https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="San Francisco, CA")&format=json
    const yahooUrl=`https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${selectedCity}")&format=json`;

    request({url: yahooUrl}).then(dataString => {
      const data = JSON.parse(dataString);
      const forecast = data.query.results.channel;
      this.setState({
        selectedCity: selectedCity,
        selectedCityForecast: forecast
      });
    });
  }
  updateCity() {
    const selectedCity = this.select.value;
    localStorage.setItem('selectedCity', selectedCity);
    this.getForcast(selectedCity);
  }
  render() {
    const { selectedCity, selectedCityForecast } = this.state;
    // TODO make the select a standalone component
    return (
      <div>

        <select 
          ref={(input)=> this.select = input}
          defaultValue={selectedCity}
          onChange={this.updateCity} 
        >
          {cityList.map((city, i) => {
            return <option key={i} value={city}>{city}</option>
          })}
        </select>

        <h1>{selectedCity}</h1>

        <WeatherCards city={selectedCity} forecast={selectedCityForecast}></WeatherCards>
      </div>
    );
  }
}

export default App;
