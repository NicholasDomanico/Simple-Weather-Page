import Weather from "./components/Weather.jsx";
import getWeatherData from "./weatherData.js";
import Background from "./components/Background.jsx";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SunDiv from "./components/Sun.jsx";
import Cloud from "./components/Clouds.jsx";
import Raining from "./components/Rain.jsx";
import Overcast from "./components/Overcast.jsx";

// Top header of webpage
const MainHeader = styled.h1`
  margin: 0;
  padding: 20px;
  z-index: 10;
`;

// Input element of the search bar
const SearchBar = styled.input`
  width: 90%;
  border-style: solid;
  border-color: black;
  border-radius: 10rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 10rem;
  border-right-style: none;
  background-color: white;
`;

// Search form
const Search = styled.form`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  z-index: 10;
`;

const SearchButton = styled.button`
  border-style: solid;
  border-color: black;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  border-left-style: none;
  background-color: white;
`;

export default function App() {
  const [location, setLocation] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setLocation(e.target[0].value);
  }

  const [data, setData] = useState([]);

  // Sets default location if search bar is empty
  let currentLocation = location != "" ? location : "Port Richey";

  useEffect(() => {
    let ignore = false;
    // Get weather object
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

  // Converts 24 hour formatted time to 12 hour
  function getTwelveHourTime(time) {
    if (time) {
      const [hour, minutes] = time.split(":");
      const currentHour = hour % 12;
      const twelveHourTime =
        (currentHour < 10 ? "0" : "") + currentHour + ":" + minutes;
      return twelveHourTime;
    }
  }

  // Converts 12 hour formatted time to 24 hour
  function getTwentyFourHourTime(time) {
    if (time) {
      const period = time.slice(-2);
      let hour = time.substring(0, 2);
      const minute = time.substring(3, 5);

      if (hour === "12") {
        hour = "00";
      }
      if (period === "PM") {
        hour = parseInt(hour, 10) + 12;
      }

      return `${hour}:${minute}`;
    }
  }

  // Calculates the (rough) number of hours of daylight at the current location
  function getDayLength() {
    if (data.sunrise) {
      const sunriseHour = getTwentyFourHourTime(data.sunrise).slice(0, 2);
      const sunsetHour = getTwentyFourHourTime(data.sunset).slice(0, 2);
      return Number(sunsetHour) - Number(sunriseHour);
    }
  }
  return (
    <Background>
      <SunDiv
        isDay={data.isDay}
        dayLength={getDayLength}
        sunrise={getTwentyFourHourTime(data.sunrise)}
        sunset={getTwentyFourHourTime(data.sunset)}
        time={data.currentTime}
        code={data.conditionsCode}
      ></SunDiv>
      <Overcast code={data.conditionsCode}></Overcast>
      <Cloud code={data.conditionsCode}></Cloud>
      <Raining code={data.conditionsCode}></Raining>
      <MainHeader>Simple Weather Page</MainHeader>
      <Search onSubmit={handleSubmit}>
        <SearchBar type="text"></SearchBar>
        <SearchButton type="submit">Search</SearchButton>
      </Search>
      <Weather data={data} />
    </Background>
  );
}
