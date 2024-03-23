import styled from "styled-components";

const OtherInfoBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content;
  grid-auto-rows: min-content;
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

const OtherInfoHeader = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const MoonPhase = styled.p`
  grid-column-start: 2;
`;

const Sunrise = styled.p`
  grid-column-start: 2;
`;

const Sunset = styled.p`
  grid-column-start: 2;
`;

export default function Other(props) {
  return (
    <OtherInfoBox>
      <OtherInfoHeader>Other Information</OtherInfoHeader>
      <p>Moon Phase: </p>
      <MoonPhase>{props.weather.moonphase}</MoonPhase>
      <p>Sunrise: </p>
      <Sunrise>{props.weather.sunrise}</Sunrise>
      <p>Sunset: </p>
      <Sunset>{props.weather.sunset}</Sunset>
    </OtherInfoBox>
  );
}
