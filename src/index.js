import weather from "./weatherData";
import { generateHomepage, elementsObject } from "./addElements";
import "./style.css";

const homepage = generateHomepage();

async function displayCurrentWeather() {
  const elements = elementsObject();
  const currentWeather = await weather();
  elements.temp.textContent += currentWeather.currentTemp;
}

displayCurrentWeather();
