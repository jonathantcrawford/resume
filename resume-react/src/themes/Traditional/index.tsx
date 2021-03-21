import React from 'react';

import * as _ from 'lodash';
import {ThemeProvider} from '@emotion/react';


import Layout from './Layout';



const Theme = ({configs}: {configs: any}) => {
    const defaultConfigs = {
        fonts: {
            primary: "'Poppins', sans-serif"
        },
        colors: {
            primary: 'red'
        }
    };

    /**
     * Could add a function here to validate theme schema.
     * if (!valid) return <div>theme setup incorrectly</div>
     */
    return (
        <ThemeProvider theme={_.defaultsDeep(configs,defaultConfigs)}>
            <Layout/>
        </ThemeProvider>
    );
}


export default Theme;


