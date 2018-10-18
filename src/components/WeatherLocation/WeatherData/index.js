import React from 'react';
import PropTypes from 'prop-types';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';


const apiKey = 'f99bbd9e4959b513e9bdd7f7356b38d';
const url = 'api.openweathermap.org/data/2.5/weather';


const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;

    return(
        <div className="weatherDataCont">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>);
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;