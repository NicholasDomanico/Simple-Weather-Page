import styled from "styled-components";
import SunDiv from "./Sun.jsx";
import Cloud from "./Clouds.jsx";
import Raining from "./Rain.jsx";
import Overcast from "./Overcast.jsx";

const Background = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: skyblue;
  width: 100%;
  height: 100%;
  margin: 0;
  padding-top: 0;
  z-index: 1;
`;

export default Background;
