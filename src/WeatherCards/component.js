import React, { Component } from 'react';
import Card from './Card/component';
import './style.css';

// TODO add loading state

class WeatherCards extends Component {
  renderCard(forecast, i) {
    const { date, high, low, text:description } = forecast.item.forecast;
    return (
      <div key={i}>
        <Card date={date} high={high} low={low} description={description} />    
      </div>
    )
  }
  render() {
    const { forecast } = this.props;
    return (
      <div className="WeatherCards">
        {forecast.map(this.renderCard)}
      </div>
    );
  }
}

WeatherCards.PropTypes = {
  forecast: React.PropTypes.array.isRequired,
}
export default WeatherCards;
