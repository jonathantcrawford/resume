import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// Accepts the array and key
const groupBy = (array: any, key: any) => {
  // Return the end result
  return array.reduce((result: any, currentValue: any) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
};

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
  const projectsByDate = groupBy(projects, "date")
  const sortedDates = Object.keys(projectsByDate).sort((a: string,b: string) => {return parseInt(b) - parseInt(a)});


  return (
    <ProjectsContainer>
        {sortedDates.map((date: any, index: any) => (
            <ProjectGroup key={date}>
              <Date>{date}</Date>

              {projectsByDate[date].map((project:any, index:any) => {
                  const links = project.links.map((link:any,index:any) => <Link key={index} href={link.url} target="_blank">{link.title}</Link>);
                  const  highlights = project.highlights.map((highlight:any, index:any) => <Highlight key={index}>{highlight}</Highlight>);
                  const  tools = project.tools.map((tool:any, index:any) => <Tool key={index}>{tool}</Tool>);
                  return (
                    <Project key={index}>
                      
                      <TitleSection>
                        <Title>{project.title}</Title>
                        <Links>{links}</Links>
                      </TitleSection>
                      <HighlightSection>{highlights}</HighlightSection>
                      <ToolsSection>
                        <Tools> {tools}</Tools>
                      </ToolsSection>
                    </Project>)
                })}
            </ProjectGroup>
          ))}
    </ProjectsContainer>
  );
}
export default Projects;


/*


*/


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

const Project = styled.div`
  margin: 0 0 5vh 0;
  width: 100%;
  padding: 4vmin;
  border-radius: 8px;
  box-shadow: 0px 0px 8px -2px #999999;
`;

const ProjectGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const Title = styled.div`
  display: inline-block;
  font-size: calc(10px + 2vmin);
  line-height: 1.5em;
`;

const Date = styled.div`
  display: inline-block;
  font-size: calc(8px + 4vmin);
  line-height: 1.5em;
  padding-left: 4vmin;
  padding-bottom: 4vmin;
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
const TitleSection = styled.ul`
  width: 100%;
  padding-inline-start: 0px;
  box-sizing: border-box;
  list-style-type: none;
  display: inline-flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
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
  margin-right: 50px;
  font-size: calc(10px + 2vmin);
  color: #999;
`;

const Tools = styled.li`
  display: inline-block;
`;

const Tool = styled.div`
  display: inline-block;
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

const StyledHr = styled.hr`
  width: 50%;
  border: 1px solid #000;
  background-color: #000
`;