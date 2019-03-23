import React, { Component } from 'react';
import './App';
import Titles from '../components/Titles'
import Form from '../components/Form'
import Weather from '../components/Weather'

const API_KEY = '06075299fd00ca6f2eaaeef29e4d43c4';

class App extends Component {

  state = {
    city: '',
    country: '',
    clouds: '',
    temp: '',
    humidity: '',
    tempmin: '',
    tempmax: '',
    wind: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        clouds: data.clouds.all,
        temp: data.main.temp,
        humidity: data.main.humidity,
        tempmin: data.main.temp_min,
        tempmax: data.main.temp_max,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        error: 'Please enter your City and Country'
      });
    }
  }

  render() {
    const { city, country, clouds, temp, humidity, tempmin, tempmax, wind, description, error } = this.state
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          city={city}
          country={country}
          clouds={clouds}
          temp={temp}
          humidity={humidity}
          tempmin={tempmin}
          tempmax={tempmax}
          wind={wind}
          description={description}
          error={error}
        />
      </div>
    );
  }
}
export default App;
