import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import {useTheme} from '@emotion/react';

import styled from "@emotion/styled";


import Button from '../basic/Button';
import Text from '../basic/Text';
import NavLink from './NavLink';



const NavLinkGroup = (props: any) => {
    const type = props.type || 'default';
    const theme: any = useTheme();
    const [isOpen, setIsOpen] = useState(true);




    const onClick = () => {
        setIsOpen(!isOpen);
    }

    const links = React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
            ...child.props, 
            key:index, 
            to: props.base + child.props.to, 
            style: {display: isOpen ? 'block' : 'none'}
        })
    } );

    return React.createElement(styled.div`
        font-family: ${theme.navlinkgroup[type].family};
        font-size: ${theme.navlinkgroup[type].size};
        color: ${theme.navlinkgroup[type].color};
        &:hover {
            cursor: pointer;
            color: ${theme.navlinkgroup[type].hover.color}
        }
    `, {...props, children: 
        <>
            <Button onClick={onClick} style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight}/>
                <Text style={{paddingLeft: '10px'}}>{props.name}</Text>
            </Button>
            {links}
        </>
    });
}

export default NavLinkGroup;