import React from "react";
import styled from "@emotion/styled";

import { NavLink } from 'react-router-dom';



const Navigation = (props: any) => {
  return (
    <NavigationContainer className={props.className}>
        <NavigationLink activeClassName="active" to="/skills">skills</NavigationLink>
        <NavigationLink activeClassName="active" to="/experience">experience</NavigationLink>
        <NavigationLink activeClassName="active" to="/projects">projects</NavigationLink>
    </NavigationContainer>
  )
}
export default Navigation;


const NavigationContainer = styled.div`
    width: 100%;
`;


const NavigationLink = styled(NavLink)`
  font-family: 'Poppins', sans-serif;
  margin-right: 50px;
  font-size: calc(16px + 2vmin);
  color: #aaa;

  &:hover, &.${props => props.activeClassName}:hover {
      color: #555;
  }

  &.${props => props.activeClassName} {
    color: #000;
  }
`;