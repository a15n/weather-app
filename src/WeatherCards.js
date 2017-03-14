import React, { Component } from 'react';

class WeatherCards extends Component {
  renderCard(forecast, i) {
    console.log(forecast);
    return <div key={i}>goes here</div>  
  }
  render() {
    const { forecast } = this.props;
    return (
      <div>
        <h3>WeatherCards</h3>  
        {forecast.map(this.renderCard)}
      </div>
    );
  }
}

export default WeatherCards;
