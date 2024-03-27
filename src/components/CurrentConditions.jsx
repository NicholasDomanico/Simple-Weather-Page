import styled from "styled-components";

const CurrentConditionsBox = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  align-items: center;
  justify-items: start;
  width: 30%;
  min-width: 200px;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 900;
  color: rgb(0, 1, 33);
  z-index: 10;
`;

const CurrentConditionsHeader = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  border-bottom: solid 1px;
`;

const CurrentConditionsSection = styled.p`
  margin: 5px;
`;

const CurrentConditionInfo = styled.p`
  grid-column-start: 2;
`;

export default function CurrentConditions({ weather }) {
  return (
    <CurrentConditionsBox>
      <CurrentConditionsHeader>Current Conditions</CurrentConditionsHeader>
      <CurrentConditionsSection>Description: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.conditions}</CurrentConditionInfo>
      <CurrentConditionsSection>Temperature: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.currentTemp}</CurrentConditionInfo>
      <CurrentConditionsSection>Feels Like: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.currentFeelsLike}</CurrentConditionInfo>
      <CurrentConditionsSection>Humidity: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.humidity}%</CurrentConditionInfo>
      <CurrentConditionsSection>Wind: </CurrentConditionsSection>
      <CurrentConditionInfo>
        {weather.windDirection} at {weather.windSpeed} MPH
      </CurrentConditionInfo>
      <CurrentConditionsSection>UV Index: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.uv}</CurrentConditionInfo>
      <CurrentConditionsSection>Air Quality: </CurrentConditionsSection>
      <CurrentConditionInfo>{weather.air}</CurrentConditionInfo>
    </CurrentConditionsBox>
  );
}
