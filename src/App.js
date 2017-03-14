import React, { Component } from 'react';
import './App.css';
import { request } from './utils';
import Select from './Select/component'
import WeatherCards from './WeatherCards/component';

const cityList = [
  'San Francisco, CA',
  'New York City, NY',
  'Boston, MA',
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedCity: localStorage.getItem('selectedCity') || 'San Francisco',
      selectedCityForecast: [],
    }

    this.updateCity = this.updateCity.bind(this);
  }
  componentDidMount() {
    this.getForcast(this.state.selectedCity);
  }
  getForcast(selectedCity) {
    const yahooUrl=`https://query.yahooapis.com/v1/public/yql?q=select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${selectedCity}")&format=json`;
    const expressUrl = `http://localhost:8080/?proxyUrl=${yahooUrl}`;
    request({url: expressUrl}).then(dataString => {
      const data = JSON.parse(dataString);
      const forecast = data.query.results.channel;
      this.setState({
        selectedCity: selectedCity,
        selectedCityForecast: forecast
      });
    });
  }
  updateCity(newCity) {
    localStorage.setItem('selectedCity', newCity);
    this.getForcast(newCity);
  }
  render() {
    const { selectedCity, selectedCityForecast } = this.state;
    return (
      <div>
        <header className="App-Header">
          <h1 className="App-Header-city">{selectedCity}</h1>

          <Select options={cityList} defaultValue={selectedCity} onChange={this.updateCity}/>
        </header>

        <WeatherCards city={selectedCity} forecast={selectedCityForecast}></WeatherCards>
      </div>
    );
  }
}

export default App;
