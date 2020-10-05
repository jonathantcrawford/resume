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
  box-sizing: border-box;
  background-color: #282c34;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;