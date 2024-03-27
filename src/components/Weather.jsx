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
  return (
    <Homepage>
      <CurrentConditions weather={props.data} />
      <Forecast weather={props.data} />
      <Other weather={props.data} />
    </Homepage>
  );
}
