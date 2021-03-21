import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';


import DBQueryResult from '../../components/DBQueryResult';

import styled from "@emotion/styled";
import {useTheme} from '@emotion/react';


const Layout = (props: any) => {
    const theme: any = useTheme();
    const layout = React.createElement(styled.div`
        font-family: ${theme.fonts.primary};
        color: ${theme.colors.primary};
        height: 100vh;
        display: grid;
        grid-template-rows: 1fr 5fr;
        grid-template-columns: 1fr;
    `, {
        children: [
            <Layout.Header key="header">
                <div>Jonathan Crawford</div>
                <div>Software Engineer</div>
                <Layout.Navigation>
                    <Navigation.Link to='/about'>About</Navigation.Link>
                    <Navigation.LinkGroup name='Work Experience'>
                        <Navigation.Link to='/work-experience/bryx'>Bryx</Navigation.Link>
                        <Navigation.Link to='/work-experience/catertrax'>CaterTrax</Navigation.Link>
                    </Navigation.LinkGroup>
                    <Navigation.LinkGroup name='Projects'>
                        <Navigation.Link to='/projects/resume'>Resume</Navigation.Link>
                        <Navigation.Link to='/projects/todo-app'>Todo App</Navigation.Link>
                        <Navigation.Link to='/projects/nfl-pickem'>NFL Pickem</Navigation.Link>
                        <Navigation.Link to='/projects/simplescope'>VST Plugin: SimpleScope</Navigation.Link>
                        <Navigation.Link to='/projects/3d-audio-demo'>3D Audio Demo</Navigation.Link>
                    </Navigation.LinkGroup>
                </Layout.Navigation>
                <Layout.Social>
                    <Social.Link href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Social.Link>
                    <Social.Link href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Social.Link>
                </Layout.Social>
            </Layout.Header>,
            <Layout.View key="view">
                <Switch>
                <Route path="/about"
                            component={(props: any) => (
                                <DBQueryResult 
                                    {...props} 
                                    query={`
                                        query {
                                            content(query: { AND: [{ slug: "${props.match.path.substring(1)}" }] }) {
                                                theme
                                                template
                                                data {
                                                    headshot_url
                                                }
                                            }
                                        }
                                    `}/>
                            )}
                        />
                    <Route path="/work-experience/:company"
                            component={(props: any) => (
                                <DBQueryResult 
                                    {...props} 
                                    query={`
                                        query {
                                            work_experiences(query: { AND: [{ slug: "${props.match.params.company}" }] }) {
                                            company
                                            role
                                            location
                                            duration
                                            highlights
                                            }
                                        }
                                    `}/>
                            )}
                        />
                <Route path="/projects/:title" 
                            component={(props: any) => (
                                <DBQueryResult 
                                    {...props} 
                                    query={`
                                        query {
                                            projects(query: { AND: [{ slug: "${props.match.params.title}" }] }) {
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
                                    `}/>
                            )}
                        />
                    <Route path="*"> 
                        <Redirect to="/about" />
                    </Route>
                </Switch>
            </Layout.View>,
    ]});

    return (
        <Router hashType="slash" basename="/">
            {layout}
        </Router>
    );
}


Layout.Header = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 1 / 2;
        grid-column: 1 / 2;

        background-color: blue;
    `, props);
}

const Social = (props: any) => {
    return React.createElement(styled.div`
        display: block;
    `, props);
}

Social.Link = (props: any) => {
    return React.createElement(styled.a`
        color: purple;
    `, props);
}

Layout.Social = Social;



const Navigation = (props: any) => {
    return React.createElement(styled.div`
        display: flex;
        flex-direction: row;
    `, props);
}

Navigation.Link = (props: any) => {
    return React.createElement(styled(NavLink)`
        color: purple;
    `, props);
}


const LinkGroup = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        setIsOpen(!isOpen);
    }

    const links = React.Children.map(props.children, (child, index) => 
        React.createElement(styled(Navigation.Link)`
            display: ${isOpen ? 'block' : 'none'};
            color: green;
        `, {...child.props, key:index}));

    return React.createElement(styled.div`
        color: pink;
    `, {...props, children: [<div key="name" onClick={onClick}>{props.name}</div>, links]});
}

Navigation.LinkGroup = LinkGroup;
Layout.Navigation = Navigation;

Layout.View = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        background-color: grey;
    `, props);
}


export default Layout;