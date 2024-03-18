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
  const [data, setData] = useState([]);

  let currentLocation = props.location != "" ? props.location : "Port Richey";

  useEffect(() => {
    let ignore = false;
    async function getWeather() {
      const weather = await getWeatherData(currentLocation);
      if (!ignore) {
        setData(weather);
      }
    }

    getWeather();
    return () => {
      ignore = true;
    };
  }, [currentLocation]);

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
