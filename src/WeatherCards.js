import React, { Component } from 'react';

// TODO add loading state

class WeatherCards extends Component {
  renderCard(forecast, i) {
    // TODO rename forecast
    const { date, high, low, text:description } = forecast.item.forecast;
    return ( 
      <div key={i}>
        <h1>{date}</h1>
        <h2>High: {high}</h2>
        <h2>Low: {low}</h2>
        <h3>{description}</h3>
      </div>  
    )
  }
  render() {
    const { city, forecast } = this.props;
    return (
      <div>
        <h3>Weather for {city}</h3>  
        {forecast.map(this.renderCard)}
      </div>
    );
  }
}

WeatherCards.PropTypes = {
  city: React.PropTypes.string.isRequired,
  forecast: React.PropTypes.array.isRequired,
}

export default WeatherCards;
