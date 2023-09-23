import axios from 'axios';

async function getWeather(latitude: number, longitude: number) {
  return await axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&timeformat=unixtime&timezone=auto&forecast_days=1`
    )
    .then(function (response) {
      return JSON.parse(response.request.response);
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export { getWeather };
