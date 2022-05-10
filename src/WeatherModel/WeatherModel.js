import React from 'react';
import { GlobalContext } from '../GlobalContext';
import SearchPlace from '../SearchPlace/SearchPlace';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import './index.css';

const WeatherModel = () => {
    const { data } = React.useContext(GlobalContext);

    if (data === null) return null

    return (
        <div className='weather__container'>
            <SearchPlace />
            {
                data.map((el) => {
                    return (
                        <WeatherInfo lat={el.lat} lon={el.lon} city={el.name} country={el.state} initials={el.country} key={el.lat} />
                    )
                })
            }
        </div>
    )
}

export default WeatherModel
