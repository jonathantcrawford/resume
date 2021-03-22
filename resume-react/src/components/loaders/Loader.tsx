import React, {useState,useEffect} from 'react';
import styled from "@emotion/styled";

import Text from '../basic/Text';

const Loader = (props: any) => {
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

    const text = props.themed ? <Text>{props.text + dots}</Text> : props.text + dots;



    return React.createElement(styled.div`
        position: relative;
        top: 50%;
        left: 50%;
        padding: 20px;
    `, {...props, children: text});
}

export default Loader;