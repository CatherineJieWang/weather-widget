import React, { FC } from "react";
import { CardProps } from "./interfaces";
import Details from "../details/Details";
import Description from "../description/Description";
import ForeCast from "../forecast/ForeCast";
import {Weather} from '../../common/interfaces'
import "./card.scss";
const Card: FC<CardProps> = (props) => {
  const { weathers, city } = props;
  return (
    <div className="card-container">
      <div className='card-container__general-container'>
        <Description weather={weathers && weathers[0]} city={city} />
        <Details weather={weathers && weathers[0]} city={city} />
      </div>
      <hr />
      <div className='card-container__general-container'>
        {weathers &&
          weathers.map((data: Weather, index: number) => (
            <ForeCast
              key={index}
              date={data.applicable_date}
              min_temp={data.min_temp.toFixed(2) + ""}
              max_temp={data.max_temp.toFixed(2) + ""}
              state_abbr={data.weather_state_abbr}
            />
          ))}
      </div>
    </div>
  );
};

export default Card;
