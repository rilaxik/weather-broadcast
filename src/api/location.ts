import axios from 'axios';

async function getLocation() {
  return await axios
    .get(
      'https://geocoding-api.open-meteo.com/v1/search?name=Lviv&count=10&language=en&format=json'
    )
    .then(function (response) {
      return JSON.parse(response.request.response);
    })
    .catch(function (error): void {
      console.log(error);
    });
}

export { getLocation };
