import React from 'react';

// import {useTheme} from '@emotion/react';


import styled from "@emotion/styled";

const Box = (props: any) => {
    // const theme: any = useTheme();
    return React.createElement(styled.div`
        display: block;
        padding: 20px;
    `, {...props});
}
export default Box;