import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import InpurBlock from "../../components/inputBlock/features/InputBlock";
import {
  getGeoLocation,
  getWeather,
  getNameLocation,
} from "../../data/fetchDataFromServer";
import { Weather as WeatherList } from "../../common/interfaces";

const Weather = () => {
  const [weathers, setWeathers] = useState<WeatherList[]>([]);
  const [city, setCity] = useState<string>("");
  const [latitude, setLatitude] = useState<string>();
  const [longitude, setLongitude] = useState<string>();

  useEffect(() => {
    //Get Local GeoLocation through Naviagtor
    function geoFindGeoLocation() {
      function success(position: any) {
        setLatitude(position.coords.latitude + "");
        setLongitude(position.coords.longitude + "");
      }
      function error() {
        alert("Unable to retrieve your location");
      }
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(success, error, {
          maximumAge: 5 * 60 * 1000,
          timeout: 3000,
        });
      }
    }
    //Get weathers from server based on local location or searching location
    const getWeatherFromServer = async (city?: string) => {
      try {
        let locationResult;
        if (city && city.length > 0) {
          locationResult = await getNameLocation(city);
        } else {
          if (latitude && longitude) {
            locationResult = await getGeoLocation(`${latitude},${longitude}`);
          }
        }
        if (locationResult && locationResult.data) {
          setCity(locationResult.data[0].title || "");
          const weatherResult = await getWeather(locationResult.data[0].woeid);
          if (weatherResult.data) {
            setWeathers(weatherResult.data.slice(0, 5));
          }
        }
      } catch {
        console.log("Server Error");
      }
    };
    geoFindGeoLocation();

    getWeatherFromServer(city);
  }, [city, latitude, longitude]);

  return (
    <div>
      <InpurBlock setWeathers={setWeathers} city={city} setCity={setCity} />
      <Card weathers={weathers} city={city} />
    </div>
  );
};

export default Weather;
