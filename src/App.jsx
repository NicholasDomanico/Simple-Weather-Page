import CurrentConditions from "./components/CurrentConditions";
import Forecast from "./components/Forecast";
import getWeatherData from "./weatherData.js";
import Weather from "./components/Weather.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(e.target[0].value);
    console.log(e.target[0].value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
      <Weather location={location} />;
    </>
  );
}
