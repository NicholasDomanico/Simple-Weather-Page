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
  display: flex-inline;
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

function Raining() {
  const rainArray = [];

  for (let i = 0; i <= 150; i++) {
    rainArray[i] = Math.floor(Math.random() * 150);
  }

  return rainArray.map((num) => (
    <RainDrop position={num} delay={Math.random() * 1000} />
  ));
}

export default Raining;
