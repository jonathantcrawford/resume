import React from 'react';
import styled from "@emotion/styled";

const Box = (props: any) => {
    return React.createElement(styled.div`
        display: block;
        padding: 20px;
    `, {...props});
}
export default Box;