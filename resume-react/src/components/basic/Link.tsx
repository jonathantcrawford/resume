import React from 'react';
import {useTheme} from '@emotion/react';
import styled from "@emotion/styled";

const Link = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    return React.createElement(styled.a`
        font-family: ${theme.link[type].family};
        font-size: ${theme.link[type].size};
        color: ${theme.link[type].color};
        &:hover {
            cursor: pointer;
            color: ${theme.link[type].hover.color};
        }
    `, props);
}

export default Link;