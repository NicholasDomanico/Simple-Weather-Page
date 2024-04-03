import styled, { keyframes } from "styled-components";

// Movement of sun accross the sky
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

function animationLength(sunrise, sunset) {
  if (sunrise) {
    return (hoursToMinutes(sunset) - hoursToMinutes(sunrise)) * 60;
  }
}

function hoursToMinutes(time) {
  let hour = time.slice(0, -2);
  let minutes = time.slice(-2);
  let timeInMinutes = Number(hour) * 60 + Number(minutes);
  return timeInMinutes;
}

function getSunPosition(time, sunriseTime) {
  if (time) {
    let timeNum = time.slice(-5).replace(":", "");
    hoursToMinutes(timeNum);
    hoursToMinutes(sunriseTime);
    return (hoursToMinutes(timeNum) - hoursToMinutes(sunriseTime)) * 60;
  }
}

const Sun = styled.div`
  display: flex-inline;
  position: fixed;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: yellow;
  animation: ${SunAnimation} infinite reverse;
  animation-duration: ${(props) =>
    animationLength(props.sunrise, props.sunset)}s;
  animation-delay: -${(props) => getSunPosition(props.time, props.sunrise)}s;
  animation-timing-function: linear;
  box-shadow: 1px 1px 10px 10px yellow;
  margin-top: 100vh;
  z-index: 0;
`;

export default function SunDiv(props) {
  return (
    <Sun
      time={props.time && props.time}
      sunrise={props.sunrise && props.sunrise.replace(":", "")}
      sunset={props.sunset && props.sunset.replace(":", "")}
      dayLength={props.dayLength() && props.dayLength()}
    ></Sun>
  );
}
