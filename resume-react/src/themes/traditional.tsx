import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as _ from 'lodash';
import {ThemeProvider} from '@emotion/react';


import DBQueryResult from '../components/DBQueryResult';

import styled from "@emotion/styled";



import Box from '../components/layout/Box';
import FlexBox from '../components/layout/FlexBox';
import Text from '../components/basic/Text';
import Link from '../components/basic/Link';
import NavLink from '../components/navigation/NavLink';
import NavLinkGroup from '../components/navigation/NavLinkGroup';

import ContentFactory from '../factories/ContentFactory';


const Theme = ({configs}: {configs: any}) => {
    const defaultConfigs = {
        text: {
            default: {
                family: "'Poppins', sans-serif",
                size: "12px",
                color: 'black'
            },
            brand: {
                family: "'Poppins', sans-serif",
                size: "24px",
                color: 'blue'
            },
            tagline: {
                family: "'Poppins', sans-serif",
                size: "16px",
                color: 'purple'
            }
        },
        link: {
            default: {
                family: "'Poppins', sans-serif",
                size: "10px",
                color: 'purple'
            },
            social: {
                family: "'Poppins', sans-serif",
                size: "10px",
                color: 'purple'
            }
        },
        navlink: {
            default: {
                family: "'Poppins', sans-serif",
                size: "16px",
                color: 'red'
            }
        },
        navlinkgroup: {
            default: {
                family: "'Poppins', sans-serif",
                size: "18px",
                color: 'pink',
                hover: {
                    color: 'purple'
                }
            }
        },
        button: {
            default: {
                family: "'Poppins', sans-serif",
                size: "16px",
                color: 'red',
                backgroundColor: 'yellow',
                hover: {
                    color: 'blue',
                    backgroundColor: 'orange',
                }
            }
        }
    };


    const Layout = (props: any) => {
        return React.createElement(styled.div`
            height: 100vh;
            display: grid;
            grid-template-rows: 1fr 5fr;
            grid-template-columns: 1fr;
        `, props);
    };

    Layout.Header = (props: any) => {
        return React.createElement(styled.div`
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        `, {...props, children: 
            <>
                <FlexBox flexDirection="column">
                    <Text type="brand">Jonathan Crawford</Text>
                    <Text type="tagline">Software Engineer</Text>
                    <FlexBox flexDirection="row">
                        <Link href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Link>
                        <Link href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Link>
                    </FlexBox>
                </FlexBox>
                <FlexBox flexDirection="row">
                    <NavLink to='/about'>About</NavLink>
                    <NavLinkGroup name='Work Experience' base='/work-experience'>
                        <NavLink to='/bryx'>Bryx</NavLink>
                        <NavLink to='/catertrax'>CaterTrax</NavLink>
                    </NavLinkGroup>
                    <NavLinkGroup name='Projects' base='/projects'>
                        <NavLink to='/resume'>Resume</NavLink>
                        <NavLink to='/todo-app'>Todo App</NavLink>
                        <NavLink to='/nfl-pickem'>NFL Pickem</NavLink>
                        <NavLink to='/simplescope'>VST Plugin: SimpleScope</NavLink>
                        <NavLink to='/3d-audio-demo'>3D Audio Demo</NavLink>
                    </NavLinkGroup>
                </FlexBox>
            </>
        });
    }

    Layout.View = (props: any) => {
        return React.createElement(styled.div`
            grid-row: 2 / 3;
            grid-column: 1 / 2;
        `, {...props, children:
            <Switch>
                <Route path="/about"
                        render={(props: any) => (
                            <DBQueryResult 
                                {...props} 
                                query={`
                                    query {
                                        content(query: { AND: [{ template: "${props.match.path.substring(1)}" }] }) {
                                            template
                                            data {
                                                headshot_url
                                            }
                                        }
                                    }
                                `}
                                render={({data}: any) => <ContentFactory contentSchematic={data.content}/> }
                                />
                        )}
                    />
                <Route path="/work-experience/:company"
                        render={(props: any) => (
                            <DBQueryResult 
                                {...props} 
                                query={`
                                    query {
                                        work_experience(query: { AND: [{ slug: "${props.match.params.company}" }] }) {
                                        company
                                        role
                                        location
                                        duration
                                        highlights
                                        }
                                    }
                                `}
                                render={({data}: any) => (
                                    <Box>
                                        <Text>{data.work_experience.company}</Text>
                                        <Text>{data.work_experience.location}</Text>
                                        <Text>{data.work_experience.role}</Text>
                                        <Text>{data.work_experience.duration}</Text>
                                        {data.work_experience.highlights.map((highlight: any, index: any) => <Text key={index}>{highlight}</Text>)}
                                    </Box>
                                )}
                                />
                        )}
                    />
                <Route path="/projects/:title" 
                        component={(props: any) => (
                            <DBQueryResult 
                                {...props} 
                                query={`
                                    query {
                                        project(query: { AND: [{ slug: "${props.match.params.title}" }] }) {
                                            title
                                            links {
                                                title
                                                url
                                            }
                                            highlights
                                            date
                                            tools
                                        }
                                    }
                                `}
                                render={({data}: any) => (
                                    <Box>
                                        <Text>{data.project.title}</Text>
                                        <Text>{data.project.date}</Text>
                                        {data.project.highlights.map((highlight: any, index: any) => <Text key={index}>{highlight}</Text>)}
                                        {data.project.tools.map((tool: any, index: any) => <Text key={index}>{tool}</Text>)}
                                        {data.project.links.map((link: any, index: any) => <Link key={index} href={link.url} target="_blank">{link.title}</Link>)}
                                    </Box>
                                )}
                                />
                        )}
                    />
                <Route path="*"> 
                    <Redirect to="/about" />
                </Route>
            </Switch>
        });
    }


    /**
     * Could add a function here to validate theme schema.
     * if (!valid) return <div>theme setup incorrectly</div>
     */
    return (
        <ThemeProvider theme={_.defaultsDeep(configs,defaultConfigs)}>
            <Router basename="/">
                <Layout>
                    <Layout.Header/>
                    <Layout.View/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}


export default Theme;


