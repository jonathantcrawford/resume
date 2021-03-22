import React from 'react';


import {NavLink as _NavLink} from 'react-router-dom';

import {useTheme} from '@emotion/react';


import styled from "@emotion/styled";

const NavLink = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    return React.createElement(styled(_NavLink)`
        font-family: ${theme.navlink[type].family};
        font-size: ${theme.navlink[type].size};
        color: ${theme.navlink[type].color};
    `, props);
}

export default NavLink;