import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {useTheme} from '@emotion/react';
import styled from "@emotion/styled";


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
            style: {display: isOpen ? 'block' : 'none', paddingTop: '5px'}
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
            <div style={{display: 'flex', flexDirection:'row', alignItems:'center',}} onClick={onClick}>
                <div style={{paddingRight: '5px'}}><FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleRight}/></div>
                <div>{props.name}</div>
            </div>
            {links}
        </>
    });
}

export default NavLinkGroup;