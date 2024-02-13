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
  // Forecast data
  elements.dayOneTemp.textContent += `${currentWeather.forecast[0].day.maxtemp_f}`;
  elements.dayOneTemp.textContent += `\r\n${currentWeather.forecast[0].day.mintemp_f}`;
  elements.dayOneDescription.textContent += `${currentWeather.forecast[0].day.condition.text}`;
  elements.dayOneRainChance.textContent += `${currentWeather.forecast[0].day.daily_chance_of_rain}%`;

  elements.dayTwoTemp.textContent += `${currentWeather.forecast[1].day.maxtemp_f}`;
  elements.dayTwoTemp.textContent += `\r\n${currentWeather.forecast[1].day.mintemp_f}`;
  elements.dayTwoDescription.textContent += `${currentWeather.forecast[1].day.condition.text}`;
  elements.dayTwoRainChance.textContent += `${currentWeather.forecast[1].day.daily_chance_of_rain}%`;

  elements.dayThreeTemp.textContent += `${currentWeather.forecast[2].day.maxtemp_f}`;
  elements.dayThreeTemp.textContent += `\r\n${currentWeather.forecast[2].day.mintemp_f}`;
  elements.dayThreeDescription.textContent += `${currentWeather.forecast[2].day.condition.text}`;
  elements.dayThreeRainChance.textContent += `${currentWeather.forecast[2].day.daily_chance_of_rain}%`;
}
displayCurrentWeather();
