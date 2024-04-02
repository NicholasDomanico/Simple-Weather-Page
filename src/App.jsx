import Weather from "./components/Weather.jsx";
import getWeatherData from "./weatherData.js";
import Background from "./components/Background.jsx";
import { useState, useEffect } from "react";
import styled from "styled-components";
import SunDiv from "./components/Sun.jsx";
import Cloud from "./components/Clouds.jsx";
import Raining from "./components/Rain.jsx";
import Overcast from "./components/Overcast.jsx";

const MainHeader = styled.h1`
  margin: 0;
  padding: 20px;
  z-index: 10;
`;

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

  let currentLocation = location != "" ? location : "Port Richey";

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

  function getTwelveHourTime(time) {
    if (time) {
      const twentyFourHourTime = time.substring(11, time.length);
      const [hour, minutes] = twentyFourHourTime.split(":");
      const currentHour = hour % 12;
      const twelveHourTime =
        (currentHour < 10 ? "0" : "") + currentHour + ":" + minutes;
      return twelveHourTime;
    }
  }

  function getTwentyFourHourTime(time) {
    if (time) {
      const period = time.substring(6, time.length);
      let hour = time.substring(0, 2);
      const minute = time.substring(3, 6);

      if (hour === "12") {
        hour = "00";
      }
      if (period === "PM") {
        hour = parseInt(hour, 10) + 12;
      }
      return `${hour}:${minute}`;
    }
  }

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
        dayLength={getDayLength}
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
