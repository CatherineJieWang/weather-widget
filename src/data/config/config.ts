
export let LOCATION_URL:string;
export let WEATHER_URL:string;

if (process.env.SERVER_ENV === "prod") {
  WEATHER_URL = "http://localhost:8080/weather";
  LOCATION_URL = "http://localhost:8080/location";
} else {
  WEATHER_URL = "http://localhost:8080/weather";
  LOCATION_URL = "http://localhost:8080/location";
}
