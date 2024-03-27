import styled, { keyframes } from "styled-components";

const CloudAnimation = keyframes`
    from {
      transform: translate(0vw);
    }

    to {
      transform: translate(100vw);
    }
`;

const CloudWrapper = styled.div`
  display: flex-inline;
  height: 300px;
  width: 300px;
  position: fixed;
  top: px;
  left: 1px;
  z-index: 0;
  animation: ${CloudAnimation} infinite 50s;
`;

export default function Cloud() {
  return (
    <CloudWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
        <ellipse
          cx="227.605"
          cy="214.17"
          fill="#FFF"
          stroke="#FFF"
          rx="100.57"
          ry="100.977"
        ></ellipse>
        <ellipse
          cx="131.922"
          cy="236.156"
          fill="#FFF"
          stroke="#FFF"
          rx="59.446"
          ry="50.489"
        ></ellipse>
        <ellipse
          cx="331.84"
          cy="248.371"
          fill="#FFF"
          stroke="#FFF"
          rx="55.782"
          ry="42.345"
        ></ellipse>
        <ellipse
          cx="252.443"
          cy="286.645"
          fill="#FFF"
          stroke="#FFF"
          rx="236.971"
          ry="32.573"
        ></ellipse>
      </svg>
    </CloudWrapper>
  );
}
