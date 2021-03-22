import React from 'react';

import {useTheme} from '@emotion/react';
import styled from "@emotion/styled";



const Grid = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    return React.createElement(styled.div`
        background-color: ${theme.grid[type].backgroundColor}
    `, props);
}

const Row = (props: any) => {
    return React.createElement(styled.div`
        display: flex;
        flex-direction: row;
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

const Column = (props: any) => {
    return React.createElement(styled.div`
        flex: ${(props: any) => props.size};
    `, props);
}

Grid.Row = Row;
Grid.Column = Column;
export default Grid;