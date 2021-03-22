import React from 'react';
import {useTheme} from '@emotion/react';
import styled from "@emotion/styled";

const Container = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    
    return React.createElement(styled.div`
        padding: ${theme.container[type].padding}
    `, {...props, children: 
        [React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, {
                ...child.props, 
                style: {...child.props.style, padding: props.padChildren ? '10px' : '0px'}, 
                key:index
            })
        } )]
    
    });
}

export default Container;