import CurrentConditions from "./components/CurrentConditions";
import Forecast from "./components/Forecast";
import getWeatherData from "./weatherData.js";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getWeather() {
      setLoading(true);
      const weather = await getWeatherData("Port Richey");
      console.log(weather);
      setData(weather);
      setLoading(false);
    }
    getWeather();
  }, []);

  return (
    <>
      <CurrentConditions weather={data} />
      <Forecast />
    </>
  );
}
