import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: inherit;
  height: 100%;
  overflow-y: scroll;
  overflow: hidden;
  background: url("/backgrounds/waveTwo.svg") no-repeat,
    url("/backgrounds/waveOne.svg") #093545 no-repeat;
  background-position: bottom;
  background-size: contain;
`;

export default Main;
