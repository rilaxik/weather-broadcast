import axios from 'axios';

async function getLocation(city: string) {
  return await axios
    .get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
    )
    .then(function (response) {
      if (Number(response.headers['content-length'] < 45)) throw new Error('invalid input');
      return JSON.parse(response.request.response);
    })
    .catch((error): void => {
      console.log(error);
    });
}

export { getLocation };
