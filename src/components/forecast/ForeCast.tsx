import React, { FC } from "react";
import { ForeCastProps } from "./interfaces";
import { weatherMap } from "../../common/iconMap";
import moment from "moment";
import { customizeDate } from "../../utils/customizeData";
import "./forecast.scss";
const ForeCast: FC<ForeCastProps> = (props) => {
  const { date, max_temp, min_temp, state_abbr } = props;
  return (
    <div className="forecast-container">
      <p className="forecast-container__text">
        {moment(date).calendar(null, customizeDate)}
      </p>
      <img src={weatherMap[state_abbr || ""]} alt="snapshot"></img>
      <p className="forecast-container__text">{`${min_temp}°C/${max_temp}°C`}</p>
    </div>
  );
};

export default ForeCast;
