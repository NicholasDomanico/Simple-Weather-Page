import Weather from "./components/Weather.jsx";
import Background from "./components/Background.jsx";
import { useState } from "react";
import styled from "styled-components";

const MainHeader = styled.h1`
  margin: 0;
  padding: 20px;
`;

export default function App() {
  const [location, setLocation] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setLocation(e.target[0].value);
  }

  return (
    <Background>
      <MainHeader>Simple Weather Page</MainHeader>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
      <Weather location={location} />
    </Background>
  );
}
