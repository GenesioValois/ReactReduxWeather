import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    //pattern matching
    const {lon, lat} = cityData.city.coord;
    // equals to lon = cityData.city.coord.lon;
    // and lat = cityData.city.coord.lat;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color='orange' units='C'/></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='black' units='%' /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
// {wheater} => wheater = state.wheater
function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
