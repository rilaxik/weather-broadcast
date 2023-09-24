enum SUN {
  RISE = 'rise',
  SET = 'set'
}

enum INFO {
  HUMIDITY = 'humidity',
  WIND = 'wind',
  PRESSURE = 'pressure',
  UV = 'uv'
}

export { SUN, INFO };

export type CityData = {
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
  name: string;
  timezone: string;
};

export type WeatherData = {
  generationtime_ms: number;
  current_weather: {
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
  };
};
