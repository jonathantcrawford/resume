import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import * as _ from 'lodash';
import {ThemeProvider} from '@emotion/react';
import DBQueryResult from '../components/DBQueryResult';


import Grid from '../components/layout/Grid';
import Container from '../components/basic/Container';
import Text from '../components/basic/Text';
import Link from '../components/basic/Link';
import NavLink from '../components/navigation/NavLink';
import NavLinkGroup from '../components/navigation/NavLinkGroup';
import ReactJson from 'react-json-view'
import ContentFactory from '../factories/ContentFactory';




const Layout = (props: any) => {
    return (
        <Grid>
            <Grid.Row>
                {props.children}
            </Grid.Row>
        </Grid>
    );
};

Layout.Sidebar = (props: any) => {
    return (
        <Grid.Column size={2}>
            <Container padChildren>
                <Text type="brand">Jon Crawford</Text>
                <Text type="tagline">Software Engineer</Text>
            </Container>
            <Container padChildren>
                <Link type="social" href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Link>
                <Link type="social" href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Link>
            </Container>
            <Container padChildren>
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
            </Container>
        </Grid.Column>
    );
}

Layout.View = (props: any) => {
    return (
        <Grid.Column size={5}>
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
                            render={({data}: any) => <ReactJson theme='pop' displayDataTypes={false} src={data.work_experience} />}
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
                            render={({data}: any) => <ReactJson theme='pop' displayDataTypes={false} src={data.project} />}
                            />
                    )}
                />
                <Route path="*"> 
                    <Redirect to="/about" />
                </Route>
            </Switch>
        </Grid.Column>
    );
}

const Theme = ({configs}: {configs: any}) => {
    const defaultConfigs = {
        body: {
            backgroundColor: '#000000'
        },
        grid: {
            default: {
                backgroundColor: 'transparent'
            }
        },
        container: {
            default: {
                padding: '20px'
            }
        },
        text: {
            default: {
                family: "'Fira Mono', monospace",
                size: "12px",
                color: '#FFFFFF',
            },
            brand: {
                family: "'Fira Mono', monospace",
                size: "24px",
                color: '#FFFFFF',
            },
            tagline: {
                family: "'Fira Mono', monospace",
                size: "16px",
                color: '#FFFFFF',
            }
        },
        link: {
            default: {
                family: "'Fira Mono', monospace",
                size: "10px",
                color: '#999999',
                hover: {
                    color: '#DDDDDD',
                }
            },
            social: {
                family: "'Fira Mono', monospace",
                size: "14px",
                color: '#999999',
                hover: {
                    color: '#DDDDDD',
                }
            }
        },
        navlink: {
            default: {
                family: "'Fira Mono', monospace",
                size: "18px",
                color: '#999999',
                hover: {
                    color: '#DDDDDD',
                },
                active: {
                    color: '#DDDDDD',
                }
            },
        },
        navlinkgroup: {
            default: {
                family: "'Fira Mono', monospace",
                size: "18px",
                color: '#999999',
                hover: {
                    color: '#DDDDDD',
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

    /**
     * Fix for html body background color
     */
    const mergedThemeConfigs = _.defaultsDeep(configs,defaultConfigs);
    document.body.style.backgroundColor = mergedThemeConfigs.body.backgroundColor;

    return (
        <ThemeProvider theme={mergedThemeConfigs}>
            <Router basename="/">
                <Layout>
                    <Layout.Sidebar/>
                    <Layout.View/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}



export default Theme;

