import CurrentConditions from "./components/CurrentConditions";
import Forecast from "./components/Forecast";
import getWeatherData from "./weatherData.js";
import Weather from "./components/Weather.jsx";
import { useState, useEffect } from "react";

export default function App() {
  return <Weather />;
}
