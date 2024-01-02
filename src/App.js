import logo from "./logo.svg";

import styled from "styled-components";
import { SplitScreen } from "./Components/SplitScreen";

const Applogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Heading = styled.h2`
  text-transform: uppercase;
`;

function App() {
  return (
    <div className="App">
      <Heading>Split Screen Pattern</Heading>
      <SplitScreen left={1} right={4} />
      <Heading>Using Styled components</Heading>
      <AppHeader>
        <Applogo src={logo} alt="logo" />
      </AppHeader>
    </div>
  );
}

export default App;
