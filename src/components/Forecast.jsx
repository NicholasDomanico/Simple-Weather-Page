import styled from "styled-components";

function Day(props) {
  return (
    <DayWrapper>
      <DayHeader>{props.date}</DayHeader>
      <ForecastTemp>Temperature: </ForecastTemp>
      <HighLow></HighLow>
      <p>Description: </p>
      <Description>
        {props.weather.forecast &&
          props.weather.forecast[props.day].day.condition.text}
      </Description>
      <p>Rain Chance: </p>
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
  border: 2px solid rgb(92, 92, 255);
  border-radius: 0.5rem;
  margin: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-weight: 1000;
`;

const DayWrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 25% 25% 25% 25%;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 1000;
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
`;

const ForecastTemp = styled.div`
  grid-row-start: 2;
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
        <h2>Three-Day Forecast</h2>
        <Day day="0" date="Today" weather={weather} />
        <Day day="1" date="Tommorow" weather={weather} />
        <Day day="2" date="Next Day" weather={weather} />
      </ForecastBox>
    </>
  );
}
