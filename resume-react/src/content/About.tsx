import React from 'react';




const About = ({data}: {data: any}) => {
    return (
        <img src={data.headshot_url} alt='headshot'/>
    );
}
export default About