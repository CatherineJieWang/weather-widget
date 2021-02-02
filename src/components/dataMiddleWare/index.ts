import { getWeather, getNameLocation } from '../../data/fetchDataFromServer';
import { Weather, Location } from '../../common/interfaces';
import { Dispatch, SetStateAction } from 'react';

//TODO : 
// add cache to store the searched location and weather
// loading first when the fetch data still waiting

export const getWeatherFromServer = async (
  cityId: number,
  setWeathers: Dispatch<SetStateAction<Weather[]>>,
) => {
  try {
    const weatherResult = await getWeather(cityId);
    if (weatherResult.data) {
      setWeathers(weatherResult.data.consolidated_weather.slice(0, 5));
    }
  } catch (e) {
    console.log('Error Message: ', e);
  }
};

export const getLocationFromServer = async (
  city: string,
  setSearchResult: Dispatch<SetStateAction<Location[]>>,
) => {
  try {
    const locationResult = await getNameLocation(city);
    if (locationResult.data) {
      setSearchResult(locationResult.data);
    }
    return locationResult;
  } catch (e) {
    console.log('Error Message: ', e);
  }
};
