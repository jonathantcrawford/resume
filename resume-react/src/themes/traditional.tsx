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

import ContentFactory from '../factories/ContentFactory';


const Layout = (props: any) => {
    return (
        <Grid>
            <Grid.Column size={1}>
                {props.children}
            </Grid.Column>
        </Grid>
    );
};

Layout.Header = (props: any) => {
    return (
        <Grid.Row>
            <Grid.Column size={1}>
                <Container padChildren>
                    <Text type="brand">Jon Crawford</Text>
                    <Text type="tagline">Software Engineer</Text>
                </Container>
                <Container padChildren>
                    <Link href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Link>
                    <Link href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Link>
                </Container>
            </Grid.Column>
            <Grid.Column size={3}>
                <Grid.Row padChildren>
                    <Container>
                        <NavLink to='/about'>About</NavLink>
                    </Container>
                    <Container>
                        <NavLinkGroup name='Work Experience' base='/work-experience'>
                            <NavLink to='/bryx'>Bryx</NavLink>
                            <NavLink to='/catertrax'>CaterTrax</NavLink>
                        </NavLinkGroup>
                    </Container>
                    <Container>
                        <NavLinkGroup name='Projects' base='/projects'>
                            <NavLink to='/resume'>Resume</NavLink>
                            <NavLink to='/todo-app'>Todo App</NavLink>
                            <NavLink to='/nfl-pickem'>NFL Pickem</NavLink>
                            <NavLink to='/simplescope'>VST Plugin: SimpleScope</NavLink>
                            <NavLink to='/3d-audio-demo'>3D Audio Demo</NavLink>
                        </NavLinkGroup>
                    </Container>
                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
    );
}

Layout.View = (props: any) => {
    return (
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
                                <Grid.Row padChildren>
                                    <Grid.Column>
                                        <Grid.Row><Text>{data.work_experience.company}</Text></Grid.Row>
                                        <Grid.Row><Text>{data.work_experience.location}</Text></Grid.Row>
                                        <Grid.Row><Text>{data.work_experience.role}</Text></Grid.Row>
                                        <Grid.Row><Text>{data.work_experience.duration}</Text></Grid.Row>
                                        
                                    </Grid.Column>
                                    <Grid.Column>
                                        {data.work_experience.highlights.map((highlight: any, index: any) => <Grid.Row key={index}><Text >{highlight}</Text></Grid.Row>)}  
                                    </Grid.Column>
                                </Grid.Row>
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
                                <Grid.Row padChildren>
                                    <Grid.Column>
                                        <Grid.Row><Text>{data.project.title}</Text></Grid.Row>
                                        <Grid.Row><Text>{data.project.date}</Text></Grid.Row>                                        
                                    </Grid.Column>
                                    <Grid.Column>
                                        {data.project.highlights.map((highlight: any, index: any) => <Grid.Row key={'highlights'+index}><Text>{highlight}</Text></Grid.Row>)}
                                        {data.project.tools.map((tool: any, index: any) => <Grid.Row key={'tools'+index}><Text >{tool}</Text></Grid.Row>)}
                                        {data.project.links.map((link: any, index: any) => <Grid.Row key={'links'+index}><Link  href={link.url} target="_blank">{link.title}</Link></Grid.Row>)}
                                    </Grid.Column>
                                </Grid.Row>
                            )}
                            />
                    )}
                />
            <Route path="*"> 
                <Redirect to="/about" />
            </Route>
        </Switch>
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
     * if (!valid) return <div>theme setup incorrectly</div>
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
                    <Layout.Header/>
                    <Layout.View/>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}


export default Theme;


