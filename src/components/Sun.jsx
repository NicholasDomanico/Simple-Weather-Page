import styled, { keyframes } from "styled-components";

const SunAnimation = keyframes`
    from {
      transform: rotate(10deg) translate(50vw);
    }

    50% {
      transform: rotate(-90deg) translate(50vw);
    }

    to {
      transform: rotate(-180deg) translate(50vw);
    }
`;

const SunDiv = styled.div`
  display: block;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: yellow;
  animation: ${SunAnimation} infinite reverse 10s;
  animation-timing-function: linear;
  box-shadow: 1px 1px 10px 10px yellow;
  margin-top: 5%;
  z-index: 0;
`;

export default SunDiv;
