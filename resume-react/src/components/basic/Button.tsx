import React from 'react';

import {useTheme} from '@emotion/react';


import styled from "@emotion/styled";


const Button = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    return React.createElement(styled.div`
        font-family: ${theme.button[type].family};
        font-size: ${theme.button[type].size};
        background-color: ${theme.button[type].backgroundColor};
        color: ${theme.button[type].color};
        &:hover {
            cursor: pointer;
            background-color: ${theme.button[type].hover.backgroundColor};
            color: ${theme.button[type].hover.color};
        }
    `, props);
}

export default Button;