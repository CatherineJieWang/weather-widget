import React, { FC } from 'react';
import { DetailsProps } from './interfaces';
import './details.scss';
const Description: FC<DetailsProps> = (props) => {
  const { weather, city } = props;
  return (
    <div className="details-container">
      <p className="details-container__city">{city || ''}</p>
      <p className="details-container__text">
        Wind Speed : {weather ? weather['wind_speed'].toFixed(2) + 'km/h' : ''}
      </p>
      <p className="details-container__text">{weather ? weather['weather_state_name'] : ''}</p>
    </div>
  );
};

export default Description;
