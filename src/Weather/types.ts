export type Condition = {
  text: string; // Weather condition text
  icon: string; // Weather icon url
  code: number; // Weather condition unique code
}

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
}

export type LocationData = {
  lat: number; // Latitude in decimal degree
  lon: number; // Longitude in decimal degree
  name: string; // Location name
  region: string; // Region or state of the location, if available
  country: string; // Location country
  tz_id: string; // Time zone name
  localtime_epoch: number; // Local date and time in unix time
  localtime: string; // Local date and time
}

export type WeatherApiResponse = {
  current: WeatherData,
  location: LocationData
}