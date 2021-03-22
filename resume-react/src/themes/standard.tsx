import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as _ from 'lodash';
import {ThemeProvider} from '@emotion/react';
import DBQueryResult from '../components/DBQueryResult';
import styled from "@emotion/styled";


import FlexBox from '../components/layout/FlexBox';
import Text from '../components/basic/Text';
import Link from '../components/basic/Link';
import NavLink from '../components/navigation/NavLink';
import NavLinkGroup from '../components/navigation/NavLinkGroup';
import ReactJson from 'react-json-view'
import ContentFactory from '../factories/ContentFactory';



const Theme = ({configs}: {configs: any}) => {
    const defaultConfigs = {
        text: {
            default: {
                family: "'Fira Mono', monospace",
                size: "12px",
                color: 'black'
            },
            brand: {
                family: "'Fira Mono', monospace",
                size: "24px",
                color: '#000000'
            },
            tagline: {
                family: "'Fira Mono', monospace",
                size: "16px",
                color: '#666666'
            }
        },
        link: {
            default: {
                family: "'Fira Mono', monospace",
                size: "10px",
                color: '#666666',
                hover: {
                    color: '#AAAAAA',
                }
            },
            social: {
                family: "'Fira Mono', monospace",
                size: "14px",
                color: '#666666',
                hover: {
                    color: '#AAAAAA',
                }
            }
        },
        navlink: {
            default: {
                family: "'Fira Mono', monospace",
                size: "18px",
                color: '#666666',
                hover: {
                    color: '#AAAAAA',
                }
            },
        },
        navlinkgroup: {
            default: {
                family: "'Fira Mono', monospace",
                size: "18px",
                color: '#666666',
                hover: {
                    color: '#AAAAAA',
                }
            }
        },
        button: {
            default: {
                family: "'Fira Mono', monospace",
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

    /**
     * Could add a function here to validate theme schema.
     * if (!valid) return <div>theme type</div>
     */


    return (
        <ThemeProvider theme={_.defaultsDeep(configs,defaultConfigs)}>
            <Router basename="/">
                <Layout>
                    <Layout.Sidebar/>
                    <Layout.View/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

const Layout = (props: any) => {
    // const theme: any = useTheme();
    return React.createElement(styled.div`
        height: 100vh;
        display: grid;
        grid-template-rows: 2fr 1fr 7fr;
        grid-template-columns: 2fr 5fr;
    `, props);
};

Layout.Sidebar = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 1 / 4;
        grid-column: 1 / 2;
    `, {...props, children: 
        <>
            <FlexBox flexDirection="column">
                <Text type="brand">Jon Crawford</Text>
                <Text type="tagline">Software Engineer</Text>
            </FlexBox>
            <FlexBox flexDirection="column">
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
            <FlexBox flexDirection="row">
                <Link type="social" href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Link>
                <Link type="social" href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Link>
            </FlexBox>
        </>
    });
}

Layout.View = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 1 / 4;
        grid-column: 2 / 3;
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
                            render={({data}: any) => <ReactJson theme='shapeshifter:inverted' displayDataTypes={false} src={data.work_experience} />}
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
                            render={({data}: any) => <ReactJson theme='shapeshifter:inverted' displayDataTypes={false} src={data.project} />}
                            />
                    )}
                />
            <Route path="*"> 
                <Redirect to="/about" />
            </Route>
        </Switch>
    });
}

export default Theme;

