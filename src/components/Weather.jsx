import getWeatherData from "../weatherData.js";
import CurrentConditions from "./CurrentConditions.jsx";
import Forecast from "./Forecast.jsx";
import Other from "./Other.jsx";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Homepage = styled.div`
  display: flex;
  justify-content: center;
`;

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
    <Homepage>
      <CurrentConditions weather={data} />
      <Forecast weather={data} />
      <Other weather={data} />
    </Homepage>
  );
}

Weather.propTypes = {
  location: PropTypes.string.isRequired,
};
