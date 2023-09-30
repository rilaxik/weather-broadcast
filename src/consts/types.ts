export enum SUN {
  RISE = 'rise',
  SET = 'set'
}

export enum INFO {
  HUMIDITY = 'Humidity',
  WIND = 'Wind',
  PRESSURE = 'Pressure',
  UV = 'UV'
}

export type CityData = {
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  name: string;
  admin1: string;
  admin2?: string;
  timezone: string;
  population?: number;
};

export type WeatherData = {
  generationtime_ms: number;
  timezone: string;
  current_weather: {
    is_day: number;
    temperature: number;
    time: number;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  };
  daily: {
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: number[];
    sunset: number[];
    time: number[];
    uv_index_max: number[];
    weathercode: number[];
    winddirection_10m_dominant: number[];
    windspeed_10m_max: number[];
  };
  daily_units: {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    precipitation_probability_max: string;
    windspeed_10m_max: string;
    uv_index_max: string;
  };
  hourly: {
    apparent_temperature: number[];
    relativehumidity_2m: number[];
    surface_pressure: number[];
    temperature_2m: number[];
    time: number[];
    weathercode: number[];
    winddirection_180m: number[];
    windspeed_10m: number[];
  };
  hourly_units: {
    apparent_temperature: string;
    relativehumidity_2m: string;
    surface_pressure: string;
    temperature_2m: string;
    time: string;
    weathercode: string;
    winddirection_180m: string;
    windspeed_10m: string;
  };
};
