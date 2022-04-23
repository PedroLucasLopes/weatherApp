import React from 'react';
import { GlobalCall } from './GlobalContext';
import WeatherModel from './WeatherModel/WeatherModel.js';
import './index.css';

function App() {
  return (
    <>
      <GlobalCall>
        <WeatherModel />
      </GlobalCall>
    </>
  );
}

export default App;
