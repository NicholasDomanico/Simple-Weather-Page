import { number } from "prop-types";
import styled, { keyframes } from "styled-components";

const Rainfall = keyframes`
  from {
    transform: rotate(-70deg) translate(0vh);
  }

  to {
    transform: rotate(-70deg) translate(-100vh);
  }
`;

const RainDrop = styled.div`
  display: ${(props) => (isRaining(props.code) ? "inline-flex" : "none")};
  position: fixed;
  height: 2px;
  width: 40px;
  left: ${(props) => props.position}vw;
  transform: rotate(-70);
  background-color: blue;
  animation: ${Rainfall} infinite linear 1s;
  animation-delay: -${(props) => props.delay}ms;
  z-index: 1;
`;

function isRaining(code) {
  if (
    code === 1150 ||
    code === 1153 ||
    code === 1180 ||
    code === 1183 ||
    code === 1186 ||
    code === 1192 ||
    code === 1195 ||
    code === 1240 ||
    code === 1243 ||
    code === 1246 ||
    code === 1273 ||
    code === 1276
  ) {
    return true;
  } else {
    return false;
  }
}

function Raining(props) {
  const rainArray = [];

  for (let i = 0; i <= 150; i++) {
    rainArray[i] = Math.floor(Math.random() * 150);
  }

  return rainArray.map((num) => (
    <RainDrop code={props.code} position={num} delay={Math.random() * 1000} />
  ));
}

export default Raining;
