export type Condition = {
  text: string; // Weather condition text
  icon: string; // Weather icon url
  code: number; // Weather condition unique code
};

export type WeatherData = {
  last_updated: string; // Local time when the real time data was updated
  last_updated_epoch: number; // Local time when the real time data was updated in unix time
  temp_c: number; // Temperature in celsius
  temp_f: number; // Temperature in fahrenheit
  feelslike_c: number; // Feels like temperature in celsius
  feelslike_f: number; // Feels like temperature in fahrenheit
  condition: Condition; // Weather condition
  wind_mph: number; // Wind speed in miles per hour
  wind_kph: number; // Wind speed in kilometer per hour
  wind_degree: number; // Wind direction in degrees
  wind_dir: string; // Wind direction as 16 point compass. e.g.: NSW
  pressure_mb: number; // Pressure in millibars
  pressure_in: number; // Pressure in inches
  precip_mm: number; // Precipitation amount in millimeters
  precip_in: number; // Precipitation amount in inches
  humidity: number; // Humidity as percentage
  cloud: number; // Cloud cover as percentage
  is_day: number; // 1 = Yes 0 = No Whether to show day condition icon or night icon
  uv: number; // UV Index
  gust_mph: number; // Wind gust in miles per hour
  gust_kph: number; // Wind gust in kilometer per hour
};

export type LocationData = {
  lat: number; // Latitude in decimal degree
  lon: number; // Longitude in decimal degree
  name: string; // Location name
  region: string; // Region or state of the location, if available
  country: string; // Location country
  tz_id: string; // Time zone name
  localtime_epoch: number; // Local date and time in unix time
  localtime: string; // Local date and time
};

export type Forecast = {
  forecastday: ForecastDay[];
};

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
};

export type Day = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
};

export type Astro = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
};

export type Hour = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};

export type WeatherApiResponse = {
  current: WeatherData;
  location: LocationData;
  forecast: Forecast;
};
