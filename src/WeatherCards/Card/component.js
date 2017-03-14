import React, { Component } from 'react';
import './style.css';

class WeatherCard extends Component {
  render() {
    const { i, date, high, low, description } = this.props;
    return ( 
      <div className="Card" key={i}>
        <h2>{date}</h2>
        <h3>{high}&deg; / {low}&deg;</h3>
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
