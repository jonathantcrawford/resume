import React from 'react';

import styled from "@emotion/styled";

const Error = (props: any) => {

    const text = React.createElement(styled.div`
        font-family: 'Fira Mono', monospace;
        font-size: 32px;
        color: black;
    `, {children: props.text});


    return React.createElement(styled.div`
        height: 100vh;
        width: 100vw;
        background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    `, {children: text});
    
}

export default Error;