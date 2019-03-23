import React from 'react';
import styled from 'styled-components';

const WeatherWrapper = styled.div`
text-align:center;
font-weight: lighter;
letter-spacing: 1px;
font-size: 20px;
`

class Weather extends React.Component {

    render() {
        const { city, country, clouds, temp, humidity, tempmin, tempmax, wind, description, error } = this.props
        return (
            <WeatherWrapper>
                {city && country && <p>Location: {city}, {country}</p>}
                {clouds && <p>Clouds: {clouds}</p>}
                {temp && <p>Temp: {temp}</p>}
                {humidity && <p>Humidity: {humidity}</p>}
                {tempmin && <p>Temp min: {tempmin}</p>}
                {tempmax && <p>Temp max: {tempmax}</p>}
                {wind && <p>Wind speed: {wind}</p>}
                {description && <p>Conditions: {description}</p>}
                {error && <p>{error}</p>}
            </WeatherWrapper>
        )
    }
}
export default Weather;