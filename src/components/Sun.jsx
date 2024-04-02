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
  return <Sun></Sun>;
}
