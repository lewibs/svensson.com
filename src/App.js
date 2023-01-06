import styled from "styled-components";
import { Background } from "./components/Background";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100vh;
`;

function App() {
  return (
    <>
      <Background />
      <Main>
        <h3>svensson.com is currently</h3>
        <h1>UNDER CONSTRUCTION!</h1>
        <h3>contact <a href="http://lewibs.com/">Benjamin</a> for details</h3>
      </Main>
    </>
  );
}

export default App;
