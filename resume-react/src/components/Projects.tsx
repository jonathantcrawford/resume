import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


const Projects = () => {
  const projects_query = gql`{ 
    content {
      projects {
            title
            tools
            highlights
            links {
            title
            url
            }
            date
        }
    }
  }`;
  const { data, loading, error } = useQuery(projects_query);
  if (loading) return (<Loading>...loading</Loading>);
  const { content } = data;
  const { projects } = content;
  return (
    <ProjectsContainer>
        <ContainerHeader>projects</ContainerHeader>
        <ContainerHr></ContainerHr>
        {projects.map((project:any, index:any) => {
            const links = project.links.map((link:any,index:any) => <Link key={index} href={link.url} target="_blank">{link.title}</Link>);
            const  highlights = project.highlights.map((highlight:any, index:any) => <Highlight key={index}>{highlight}</Highlight>);
            const  tools = project.tools.map((tool:any, index:any) => <Tool key={index}>{tool}</Tool>);
            return (
            <ProjectStyled key={index}>
              <Title>{project.title}</Title>
              <Date>{project.date}</Date>
              <LinksSection>
                <Links>{links}</Links>
              </LinksSection>
              <HighlightSection>{highlights}</HighlightSection>
              <ToolsSection>
                <Tools> {tools}</Tools>
              </ToolsSection>
            </ProjectStyled>
          )})}
    </ProjectsContainer>
  );
}
export default Projects;


const ProjectsContainer = styled.div`
  height: 100%;
  background-color: #fff;
  max-width: 100%;
  margin: 0px;
  padding: 0 8vw 0 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: calc(8px + 2vmin);
  color: black;
`;

const ContainerHeader = styled.h1`
  font-size: calc(10px + 2vmin);
  color: #000;
`;

const ContainerHr = styled.hr`
  width: 50%;
  margin: 0 5vw 5vh 0;
  border: 1px solid #000;
`;


const ProjectStyled = styled.div`
  margin: 0 5vw 5vh 0;
`;

const Title = styled.div`
  font-size: calc(10px + 2vmin);
  line-height: 1.5em;
`;

const Date = styled.div`
  font-size: calc(8px + 2vmin);
  line-height: 1.5em;
`;

const HighlightSection = styled.ul`
  padding-inline-start: 20px;
`;

const ToolsSection = styled.ul`
  padding-inline-start: 0px;
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: calc(12px + 2vmin);
  color: black;
`;
const LinksSection = styled.ul`
  padding-inline-start: 0px;
  box-sizing: border-box;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: calc(12px + 2vmin);
  color: black;
`;

const Highlight = styled.li`
  margin: 2vh 0 2vh 0;
`;

const Links = styled.li`
  display: inline-block;
`;

const Link = styled.a`
  margin-right: 15px;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Tools = styled.li`
  display: inline-block;
`;

const Tool = styled.a`
  background-color: #DDD;
  border-radius: 8px;
  padding: 1vh 1vw 1vh 1vw;
  margin-right: calc(10px + 1vmin);
  font-size: calc(10px + 1vmin);
  color: black;
`;

const Loading = styled.div`
  margin: auto;
  padding: 0 8vw 0 8vw;
`;