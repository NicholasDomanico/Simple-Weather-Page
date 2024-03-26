import styled from "styled-components";

const OtherInfoBox = styled.div`
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
`;

const OtherInfoHeader = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  border-bottom: solid 1px;
`;

const OtherInfoSection = styled.p`
  margin: 5px;
`;

const OtherInfo = styled.p`
  grid-column-start: 2;
`;

export default function Other(props) {
  return (
    <OtherInfoBox>
      <OtherInfoHeader>Other Information</OtherInfoHeader>
      <OtherInfoSection>Moon Phase: </OtherInfoSection>
      <OtherInfo>{props.weather.moonphase}</OtherInfo>
      <OtherInfoSection>Sunrise: </OtherInfoSection>
      <OtherInfo>{props.weather.sunrise}</OtherInfo>
      <OtherInfoSection>Sunset: </OtherInfoSection>
      <OtherInfo>{props.weather.sunset}</OtherInfo>
    </OtherInfoBox>
  );
}
