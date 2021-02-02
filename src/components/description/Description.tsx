import React, { FC } from 'react';
import { DescriptionProps } from './interfaces';
import { weatherMap } from '../../common/iconMap';
import './description.scss';
const Description: FC<DescriptionProps> = (props) => {
  const { weather } = props;
  return (
    <div className="description-container">
      <img src={weatherMap[weather ? weather.weather_state_abbr : '']} alt="snapshot"></img>
      <p>Min : {weather ? weather['min_temp'].toFixed(2) + '°C' : ''}</p>
      <p>Max : {weather ? weather['max_temp'].toFixed(2) + '°C' : ''}</p>
    </div>
  );
};

export default Description;
