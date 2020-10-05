import React from "react";
import styled from "@emotion/styled";
import Resume from './Resume';



const App: React.FC = (props) => {
  return (
    <AppContainer>
      <Resume/>
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;