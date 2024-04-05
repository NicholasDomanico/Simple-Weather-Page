import styled from "styled-components";

const OvercastCloud = styled.div`
  display: ${(props) => (isOvercast(props.code) ? "block" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    rgb(114, 114, 114, 1),
    rgb(172, 172, 172, 0.5)
  );
  z-index: 1;
`;

function isOvercast(code) {
  if (
    code === 1009 ||
    code === 1030 ||
    code === 1117 ||
    code === 1135 ||
    code >= 1087
  ) {
    return true;
  } else {
    return false;
  }
}

export default function Overcast(props) {
  return <OvercastCloud code={props.code && props.code}></OvercastCloud>;
}
