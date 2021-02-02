import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import InpurBlock from '../../components/inputBlock/features/InputBlock';
import { getGeoLocation } from '../../data/fetchDataFromServer';
import { Weather as WeatherList, Location } from '../../common/interfaces';
import { getWeatherFromServer } from '../../components/dataMiddleWare/index';

const Weather = () => {
  //TODO && OPTIONS:
  //Store the local location and weather at first time
  //Get localstorage data when waiting for the api response
  //If project complex enough - use redux set state management
  const [weathers, setWeathers] = useState<WeatherList[]>([]);
  const [city, setCity] = useState<string>('');
  const [locationResult, setLocationResult] = useState<Location[]>([]);
  useEffect(() => {
    //Get Local GeoLocation through Naviagtor
    function findGeoLocation() {
      async function success(position: any) {
        if (position.coords.latitude && position.coords.longitude) {
          const result = await getGeoLocation(
            `${position.coords.latitude},${position.coords.longitude}`,
          );
          if (result && result.data) {
            setLocationResult(result.data);
          }
        }
      }
      function error() {
        alert('Unable to retrieve your location');
      }
      if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser');
      } else {
        navigator.geolocation.getCurrentPosition(success, error, {
          maximumAge: 5 * 60 * 1000,
          timeout: 1000,
        });
      }
    }

    //Get weathers from server based on local location or searching location
    if (locationResult && locationResult[0]) {
      setCity(locationResult[0].title || '');
      if (locationResult[0].woeid) {
        getWeatherFromServer(locationResult[0].woeid, setWeathers);
      }
    }
    findGeoLocation();
  }, [locationResult]);

  return (
    <div>
      <InpurBlock setWeathers={setWeathers} city={city} setCity={setCity} />
      <Card weathers={weathers} city={city} />
    </div>
  );
};

export default Weather;
