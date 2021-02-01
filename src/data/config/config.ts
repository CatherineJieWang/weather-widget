export let LOCATION_URL: string;
export let WEATHER_URL: string;
export let GEOLOCATION_URL: string;

//both production and testing env using live api 
//TODO: Can build testing api for development env

WEATHER_URL = "https://weather-backend-development.herokuapp.com/weather";
LOCATION_URL = "https://weather-backend-development.herokuapp.com/location";
GEOLOCATION_URL =
  "https://weather-backend-development.herokuapp.com/geoslocation";
