import React from 'react';

import Clear from './img/sun.png';
import Storm from './img/storm.png';
import StormSun from './img/storm-sun.png';
import Rain from './img/rain.png';
import RainSun from './img/rain-sun.png';
import ClearNight from './img/moon.png';
import Clouds from './img/cloudy.png';

import './index.css';

const WeatherInfo = ({ lat, lon, city, country, initials }) => {
    const api = {
        base: 'https://api.openweathermap.org/data/2.5/',
        key: '81fa2e3b6e5997b8560c508cb56160a1'
    }
    const [info, setInfo] = React.useState(null)

    React.useEffect(() => {
        fetch(`${api.base}weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`)
            .then(response => response.json())
            .then(json => setInfo(json))
    }, [api.base, api.key, lat, lon])

    function weather(desc) {
        const date = new Date();
        const hours = date.getHours();

        if (hours < 18 && desc === 'Clear') {
            return Clear;
        } else if (hours > 18 && desc === 'Clear') {
            return ClearNight;
        } else if (desc === 'Clouds') {
            return Clouds;
        } else if (hours < 18 && desc === 'Rain') {
            return RainSun;
        } else if (hours > 18 && (desc === 'Rain' || desc === 'Drizzle')) {
            return Rain;
        } else if (hours < 18 && desc === 'Thunderstorm') {
            return StormSun;
        } else if (hours > 18 && desc === 'Thunderstorm') {
            return Storm;
        }
    }

    function nameFilter(city, country, initials) {
        if (city !== undefined && country !== undefined) {
            return `${city}, ${country}`
        } else if (city !== '' && country === undefined) {
            return `${city}, ${initials}`
        }
    }

    if (info === null) return null

    return (
        <div className='weather__info'>
            <h1 className='address'>{nameFilter(city, country, initials)}</h1>
            <img src={info.weather.map((el) => {
                return weather(el.main)
            })} alt="weather" />
            <table className='table'>
                <thead>
                    <tr>
                        <td>Min.</td>
                        <td>Temp.</td>
                        <td>Max.</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='min'>{info.main.temp_min}C°</td>
                        <td>{info.main.temp}Cº</td>
                        <td className='max'>{info.main.temp_max}Cº</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeatherInfo
