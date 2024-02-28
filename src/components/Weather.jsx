import getWeatherData from "../weatherData.js";
import CurrentConditions from "./CurrentConditions.jsx";
import Forecast from "./Forecast.jsx";
import { useState, useEffect } from "react";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function getWeather() {
      setLoading(true);
      const weather = await getWeatherData("Port Richey");
      if (!ignore) {
        console.log(weather);
        setData(weather);
      }
      setLoading(false);
    }
    getWeather();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <CurrentConditions weather={data} />
      <Forecast />
    </>
  );
}
