import styled from "styled-components";

const OtherInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-width: 200px;
  border: 2px solid rgb(92, 92, 255);
  border-radius: 0.5rem;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: 1000;
  box-sizing: border-box;
`;

export default function Other(props) {
  return (
    <OtherInfoBox>
      <h2>Other Information</h2>
      <p>Moon Phase: </p>
      <p id="moon-phase" />
      <p>Sunrise: </p>
      <p id="sunrise" />
      <p>Sunset: </p>
      <p id="sunset" />
    </OtherInfoBox>
  );
}
