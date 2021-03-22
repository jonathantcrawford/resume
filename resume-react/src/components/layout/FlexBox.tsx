import React from 'react';

// import {useTheme} from '@emotion/react';


import styled from "@emotion/styled";

const FlexBox = (props: any) => {
    // const theme: any = useTheme();
    return React.createElement(styled.div`
        display: flex;
        flex-direction: ${props.flexDirection};
        padding: 20px;
    `, {...props, children: 
        [React.Children.map(props.children, (child, index) => {
            console.log(child);
            return React.cloneElement(child, {style: {padding: '10px'}, key:index})
        } )]
    
    });
}
export default FlexBox;