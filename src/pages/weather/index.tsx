import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import InpurBlock from "../../components/inputBlock/features/InputBlock";
import {
  getGeoLocation,
  getWeather,
  getLangLocation,
  getNameLocation,
} from "../../data/fetchDataFromServer";

const Weather = () => {
  const [weathers, setWeathers] = useState();
  const [city, setCity] = useState<string>();
  const getGeoLocationFromServer = async (city?:string) => {
    try {
      let locationResult;
      if (city) {
        locationResult = await getNameLocation(city);
      } else {
        const result = await getGeoLocation();
        if (result.data) {
          locationResult = await getLangLocation(
            `${result.data.latitude},${result.data.longitude}`
          );
        }
      }
      if (locationResult && locationResult.data) {
        setCity(locationResult.data[0].title);
        const weatherResult = await getWeather(locationResult.data[0].woeid);
        if (weatherResult.data) {
          setWeathers(weatherResult.data.slice(0, 5));
        }
      }
    } catch {
      console.log("Server Error");
    }
  };
  useEffect(() => {
    getGeoLocationFromServer(city);
  }, [city]);
  return (
    <div>
      <InpurBlock
        setWeathers={setWeathers}
        city={city}
        setCity={setCity}
      />
      <Card weathers={weathers} city={city} />
    </div>
  );
};

export default Weather;
