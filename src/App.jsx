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

  return (
    <Background>
      <MainHeader>Simple Weather Page</MainHeader>
      <Search onSubmit={handleSubmit}>
        <SearchBar type="text"></SearchBar>
        <SearchButton type="submit">Search</SearchButton>
      </Search>
      <Weather data={data} />
    </Background>
  );
}
