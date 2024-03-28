import styled from "styled-components";

const OvercastCloud = styled.div`
  display: ${(props) => (isOvercast(props.code) ? "block" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(#727272, #acacac);
  z-index: 1;
`;

function isOvercast(code) {
  console.log("Code is", code);
  if (code === 1009 || code === 1030 || code === 1117 || code === 1189) {
    return true;
  } else {
    return false;
  }
}

export default function Overcast(props) {
  return <OvercastCloud code={props.code && props.code}></OvercastCloud>;
}
