import weather from "./weatherData";
import { generateHomepage, elementsObject } from "./addElements";
import "./style.css";

const homepage = generateHomepage();

async function displayCurrentWeather() {
  const elements = elementsObject();
  const currentWeather = await weather();
  elements.conditions.textContent += `${currentWeather.conditions}`;
  elements.temp.textContent += `${currentWeather.currentTemp} F`;
  elements.feelsLike.textContent += `${currentWeather.currentFeelsLike} F`;
  elements.humdity.textContent += `${currentWeather.humidity}%`;
  elements.wind.textContent += `${currentWeather.windDirection} at ${currentWeather.windSpeed} MPH`;
  elements.uv.textContent += `${currentWeather.uv}`;
  elements.air.textContent += `${currentWeather.air}`;
  elements.dayOneTemp.textContent += `${currentWeather.forecast[0].day.maxtemp_f}`;
  elements.dayOneTemp.textContent += `\r\n${currentWeather.forecast[0].day.mintemp_f}`;
}
displayCurrentWeather();
