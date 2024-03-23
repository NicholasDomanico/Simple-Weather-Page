import Weather from "./components/Weather.jsx";
import Background from "./components/Background.jsx";
import { useState } from "react";
import styled from "styled-components";

const MainHeader = styled.h1`
  margin: 0;
  padding: 20px;
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

  return (
    <Background>
      <MainHeader>Simple Weather Page</MainHeader>
      <Search onSubmit={handleSubmit}>
        <SearchBar type="text"></SearchBar>
        <SearchButton type="submit">Search</SearchButton>
      </Search>
      <Weather location={location} />
    </Background>
  );
}
