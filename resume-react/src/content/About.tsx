import React from 'react';


import {useTheme} from '@emotion/react';


import styled from "@emotion/styled";

const About = ({data}: {data: any}) => {
    return (
        <img src={data.headshot_url}/>
    );
}
export default About