import React from "react";
import styled from "@emotion/styled";

import { NavLink, LinkProps } from 'react-router-dom';

const Navigation = (props: any) => {
  return (
    <NavigationContainer className={props.className}>
        <NavigationLink to="/skills">skills</NavigationLink>
        <NavigationLink to="/experience">experience</NavigationLink>
        <NavigationLink to="/projects">projects</NavigationLink>
    </NavigationContainer>
  )
}
export default Navigation;




const NavigationContainer = styled.div`
    width: 100%;
`;

const NavigationLink = styled(NavLink)`
    margin-right: 15px;
    font-size: calc(10px + 2vmin);
    color: #888;

    &:hover {
        color: #000;
    }
`;