import React from "react";
import styled from "@emotion/styled";

import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Tab } from 'semantic-ui-react'


const panes = [
  {
    menuItem: 'skills',
    render: () => <Tab.Pane attached={false}><Skills/></Tab.Pane>,
  },
  {
    menuItem: 'experience',
    render: () => <Tab.Pane attached={false}><Experience/></Tab.Pane>,
  },
  {
    menuItem: 'projects',
    render: () => <Tab.Pane attached={false}><Projects/></Tab.Pane>,
  },
]


const App = () => {
  return (
    <AppContainer>
      <Header/>
      <AppView>
        <Switch>
          <Route exact path="/experience" component={Experience}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route path="*">
            <Redirect to="/experience" />
        </Route>
        </Switch>
      </AppView>
    </AppContainer>
  );
};
export default App;

const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: block;
  font-size: calc(10px + 2vmin);
`;

const AppView = styled.div``;