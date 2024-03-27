import styled from "styled-components";

function Day(props) {
  return (
    <DayWrapper>
      <DayHeader>{props.date}</DayHeader>
      <ForecastSection>Temperature: </ForecastSection>
      <HighLow>
        {props.weather.forecast &&
          props.weather.forecast[props.day].day.maxtemp_f}
        {`\n`}
        {props.weather.forecast &&
          props.weather.forecast[props.day].day.mintemp_f}
      </HighLow>
      <ForecastSection>Description: </ForecastSection>
      <Description>
        {props.weather.forecast &&
          props.weather.forecast[props.day].day.condition.text}
      </Description>
      <ForecastSection>Rain Chance: </ForecastSection>
      <RainChance>
        {props.weather.forecast &&
          props.weather.forecast[props.day].day.daily_chance_of_rain}
        %
      </RainChance>
    </DayWrapper>
  );
}

const ForecastBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 200px;

  margin: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 900;
  z-index: 10;
`;

const ForecastHeader = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  border-bottom: solid 1px;
`;

const DayWrapper = styled.section`
  display: grid;
  grid-template-columns: 60% auto;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
  justify-items: start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 900;
  color: rgb(0, 1, 33);
`;

const DayHeader = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  background-color: rgb(92, 92, 255);
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 1;
  grid-column-end: 3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ForecastSection = styled.p`
  margin: 5px;
`;

const HighLow = styled.div`
  white-space: pre;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-row-start: 2;
  grid-column-start: 2;
`;

const Description = styled.p`
  grid-row-start: 3;
  grid-column-start: 2;
`;

const RainChance = styled.div`
  grid-row-start: 4;
  grid-column-start: 2;
`;

export default function Forecast({ weather }) {
  return (
    <>
      <ForecastBox>
        <ForecastHeader>Three-Day Forecast</ForecastHeader>
        <Day day="0" date="Today" weather={weather} />
        <Day day="1" date="Tommorow" weather={weather} />
        <Day day="2" date="Next Day" weather={weather} />
      </ForecastBox>
    </>
  );
}
