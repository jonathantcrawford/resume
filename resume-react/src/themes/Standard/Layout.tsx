import React, {useState} from 'react';
import {HashRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';


import DBQueryResult from '../../components/DBQueryResult';

import styled from "@emotion/styled";


const Layout = (props: any) => {
    const layout = React.createElement(styled.div`
        height: 100vh;
        display: grid;
        grid-template-rows: 2fr 1fr 7fr;
        grid-template-columns: 1fr 4fr;
    `, {
        children: [
            <Layout.Header>
                <div>Jonathan Crawford</div>
                <div>Software Engineer</div>
            </Layout.Header>,
            <Layout.Social>
                <Social.Link href='https://www.linkedin.com/in/jonathantcrawford/' target="_blank">LinkedIn</Social.Link>
                <Social.Link href='https://github.com/jonathantcrawford' target='_blank'>GitHub</Social.Link>
            </Layout.Social>,
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
            </Layout.Navigation>,
            <Layout.View>
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
            </Layout.View>
    ]});

    return (
        <Router hashType="slash" basename="/">
            {layout}
        </Router>
    );
}


Layout.Header = (props: any) => {
    return React.createElement(styled.div`
        min-height: 100px;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
       
    `, {children: props.children});
}

const Social = (props: any) => {
    return React.createElement(styled.div`
        min-height: 60px;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
    `, {children: props.children});
}

Social.Link = (props: any) => {
    return React.createElement(styled.a`
        color: purple;
    `, props);
}

Layout.Social = Social;



const Navigation = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 3 / 4;
        grid-column: 1 / 2;
        
        display: flex;
        flex-direction: column;
    `, {children: props.children});
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
        color: blue;
    `, {children: [<div key="name" onClick={onClick}>{props.name}</div>, links]});
}

Navigation.LinkGroup = LinkGroup;
Layout.Navigation = Navigation;

Layout.View = (props: any) => {
    return React.createElement(styled.div`
        grid-row: 1 / 4;
        grid-column: 2 / 3;
    `, {children: props.children});
}

export default Layout;