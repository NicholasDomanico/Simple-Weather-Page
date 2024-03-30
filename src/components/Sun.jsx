import styled, { keyframes } from "styled-components";

const SunAnimation = keyframes`
    from {
      transform: rotate(0deg) translate(90vh);
    }

    50% {
      transform: rotate(-90deg) translate(90vh);
    }

    to {
      transform: rotate(-180deg) translate(90vh);
    }
`;

function getTime(time) {
  if (time) {
    const twentyFourHourTime = time.substring(11, time.length);
    const [hour, minutes] = twentyFourHourTime.split(":");
    const currentHour = hour % 12;
    const twelveHourTime =
      (currentHour < 10 ? "0" : "") + currentHour + ":" + minutes;
    return twelveHourTime;
  }
}

function getDayLength() {
  const sunrise = "7:34";
  const sunset = "8:30";
  const sunRiseTime = sunrise.split(":");
  const sunSetTime = sunset.split("");
}

getDayLength();

const Sun = styled.div`
  display: flex-inline;
  position: fixed;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: yellow;
  animation: ${SunAnimation} infinite reverse 5s;
  animation-timing-function: linear;
  box-shadow: 1px 1px 10px 10px yellow;
  margin-top: 100vh;
  z-index: 0;
`;

export default function SunDiv(props) {
  getTime(props.time);
  return <Sun></Sun>;
}
