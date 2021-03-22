import React, {useState,useEffect} from 'react';
import styled from "@emotion/styled";



const ThemeLoader = (props: any) => {
    const [dots, setDots] = useState('...')

    useEffect(() => {
        let timer = setTimeout(() => setDots(dots === '......' ? '' : dots + '.'), 100);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
          clearTimeout(timer);
        };
    },[dots]);

    const text = React.createElement(styled.div`
    `, {children:props.text + dots });


    return React.createElement(styled.div`
        height: 100vh;
        width: 100vw;
        background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    `, {children: text});
}

export default ThemeLoader;