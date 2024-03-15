import styled from "styled-components";

const CurrentConditionsBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-auto-rows: auto;
  align-items: center;
  justify-items: center;
  width: 30%;
  min-width: 200px;
  border: 2px solid rgb(92, 92, 255);
  border-radius: 0.5rem;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 1000;
  color: rgb(0, 1, 33);
`;

const CurrentConditionsHeader = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const CurrentDescription = styled.p`
  grid-column-start: 2;
`;

const CurrentTemperature = styled.p`
  grid-column-start: 2;
`;

const CurrentFeelsLike = styled.p`
  grid-column-start: 2;
`;

const CurrentHumidity = styled.p`
  grid-column-start: 2;
`;

const CurrentWind = styled.p`
  grid-column-start: 2;
`;
const CurrentUV = styled.p`
  grid-column-start: 2;
`;

const CurrentAir = styled.p`
  grid-column-start: 2;
`;

export default function CurrentConditions({ weather }) {
  return (
    <CurrentConditionsBox>
      <CurrentConditionsHeader>Current Conditions</CurrentConditionsHeader>
      <p>Description: </p>
      <CurrentDescription>{weather.conditions}</CurrentDescription>
      <p>Temperature: </p>
      <CurrentTemperature>{weather.currentTemp}</CurrentTemperature>
      <p>Feels Like: </p>
      <CurrentFeelsLike>{weather.currentFeelsLike}</CurrentFeelsLike>
      <p>Humidity: </p>
      <CurrentHumidity>{weather.humidity}%</CurrentHumidity>
      <p>Wind: </p>
      <CurrentWind></CurrentWind>
      <p>UV Index: </p>
      <CurrentUV></CurrentUV>
      <p>Air Quality: </p>
      <CurrentAir></CurrentAir>
    </CurrentConditionsBox>
  );
}
