export interface Weather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface Location {
  title?: string;
  location_type?: string;
  woeid?: number;
  latt_long?: string;
}
export interface Position {
  [props: string]: { [props: string]: string | number };
}
