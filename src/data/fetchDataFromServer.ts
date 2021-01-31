import axios from "axios";
import { LOCATION_URL, WEATHER_URL, GEOLOCATION_URL } from "./config/config";
import { LocationApiProps, WeatherApiProps } from "./interfaces";
import { Location } from "../components/inputBlock/types";
export const getWeather = (cityId: WeatherApiProps) =>
  axios.get(`${WEATHER_URL}/${cityId}`);

export const getNameLocation = (city: LocationApiProps) =>
  axios.get<Location[]>(`${LOCATION_URL}/?query=${city}`);
export const getLangLocation = (lattlong: LocationApiProps) =>
  axios.get<Location[]>(`${LOCATION_URL}/?lattlong=${lattlong}`);
export const getGeoLocation = () => axios.get(GEOLOCATION_URL);