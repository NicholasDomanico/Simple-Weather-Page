export default async function getWeatherData(location) {
  const weatherData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=9b71b48ce7c0421aa7e60005242301&q=${location}&aqi=yes`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  const astroData = await fetch(
    `http://api.weatherapi.com/v1/astronomy.json?key=9b71b48ce7c0421aa7e60005242301&q=${location}`,
    {
      method: "GET",
      mode: "cors",
    }
  );

  const forecastData = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=9b71b48ce7c0421aa7e60005242301&q=${location}&days=3&aqi=no&alerts=no
    `,
    {
      method: "GET",
      mode: "cors",
    }
  );

  const astroDataJson = await astroData.json();
  const weatherDataJson = await weatherData.json();
  const forecastDataJson = await forecastData.json();
  const weatherObject = {
    currentTime: weatherDataJson.location.localtime,
    conditions: weatherDataJson.current.condition.text,
    conditionsCode: weatherDataJson.current.condition.code,
    currentTemp: weatherDataJson.current.temp_f,
    currentFeelsLike: weatherDataJson.current.feelslike_f,
    windSpeed: weatherDataJson.current.wind_mph,
    windDirection: weatherDataJson.current.wind_dir,
    humidity: weatherDataJson.current.humidity,
    air: weatherDataJson.current.air_quality["us-epa-index"],
    uv: weatherDataJson.current.uv,
    sunrise: astroDataJson.astronomy.astro.sunrise,
    sunset: astroDataJson.astronomy.astro.sunset,
    moonphase: astroDataJson.astronomy.astro.moon_phase,
    forecast: forecastDataJson.forecast.forecastday,
  };
  return weatherObject;
}
