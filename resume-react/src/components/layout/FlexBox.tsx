import React from 'react';
import styled from "@emotion/styled";

const FlexBox = (props: any) => {
    return React.createElement(styled.div`
        display: flex;
        flex-direction: ${props.flexDirection};
        ${props.alignItems ? `align-items: ${props.alignItems};`: ''}
        padding: 20px;
    `, {...props, children: 
        [React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, {style: {...child.props.style,padding: '20px'}, key:index})
        } )]
    
    });
}
export default FlexBox;