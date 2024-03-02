import getWeatherData from "../weatherData.js";
import CurrentConditions from "./CurrentConditions.jsx";
import Forecast from "./Forecast.jsx";
import { useState, useEffect } from "react";

export default function Weather(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  let location = props.location;

  useEffect(() => {
    let ignore = false;
    async function getWeather() {
      setLoading(true);
      const weather = await getWeatherData(location);
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
  }, [location]);

  return (
    <>
      <CurrentConditions weather={data} />
      <Forecast />
      <button onClick={() => (location = "London")}></button>
    </>
  );
}
