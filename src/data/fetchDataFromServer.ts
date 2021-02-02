import axios from 'axios';
import { API_URL , ENDPOINTS } from './config/config';
import { LocationApiProps, WeatherApiProps } from './interfaces';
import { Location } from '../common/interfaces';
export const getWeather = (cityId: WeatherApiProps) => axios.get(`${API_URL}${ENDPOINTS.WEATHER}/${cityId}`);

export const getNameLocation = (city: LocationApiProps) =>
  axios.get<Location[]>(`${API_URL}${ENDPOINTS.LOCATION}/?query=${city}`);

export const getGeoLocation = (lattlong: LocationApiProps) =>
  axios.get<Location[]>(`${API_URL}${ENDPOINTS.GEOLOCATION}/?lattlong=${lattlong}`);
