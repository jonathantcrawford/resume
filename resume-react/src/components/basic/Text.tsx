import React from 'react';
import {useTheme} from '@emotion/react';
import styled from "@emotion/styled";

const Text = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    return React.createElement(styled.div`
        font-family: ${theme.text[type].family};
        font-size: ${theme.text[type].size};
        color: ${theme.text[type].color};
    `, props);
}

export default Text;