import React, { Component } from 'react';
import './style.css';

class WeatherCard extends Component {
  render() {
    const { i, date, high, low, description } = this.props;
    return ( 
      <div className="Card" key={i}>
        <h1>{date}</h1>
        <h2>High: {high}</h2>
        <h2>Low: {low}</h2>
        <h3>{description}</h3>
      </div>  
    )
  }
}

WeatherCard.PropTypes = {
  date: React.PropTypes.string.isRequired,
  high: React.PropTypes.string.isRequired,
  low: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
}

export default WeatherCard;
