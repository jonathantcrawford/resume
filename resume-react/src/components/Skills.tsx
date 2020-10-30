import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Skills = () => {
  const skills_query = gql`{ 
    content {
      skills {
          languages
          frameworks
          dev_tools
      }
    }
  }`;
  const { data, loading, error } = useQuery(skills_query);
  if (loading) return (<Loading>...loading</Loading>);
  const { content } = data;
  const { skills } = content;

  return (
    <SkillsContainer>
      <ContainerHeader>skills</ContainerHeader>
      <ContainerHr></ContainerHr>
      <SkillsListsContainer>
          <SkillList>
            <SkillType>languages</SkillType>
            <StyledHr></StyledHr>
            {skills.languages.map((language:any, index: any) => <li key={index}>{language}</li>)}
          </SkillList>    
          <SkillList>
            <SkillType>frameworks</SkillType>
            <StyledHr></StyledHr>
            {skills.frameworks.map((framework: any, index: any) => <li key={index}>{framework}</li>)}
          </SkillList>
          <SkillList>
            <SkillType>dev_tools</SkillType>
            <StyledHr></StyledHr>
            {skills.dev_tools.map((dev_tool: any, index: any) => <li key={index}>{dev_tool}</li>)}
          </SkillList>
        </SkillsListsContainer>
    </SkillsContainer>
  );
}
export default Skills;

const SkillsContainer = styled.div`
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

const SkillsListsContainer = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const SkillList = styled.ul`
  list-style-type: none;
  margin: 0 5vw 5vh 0;
  padding: 0;
  font-size: calc(8px + 2vmin);
  color: #888;
`;

const SkillType = styled.li`
  font-size: calc(10px + 2vmin);
  color: #000;
`;

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #000;
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

const Loading = styled.div`
  margin: auto;
  padding: 0 8vw 0 8vw;
`;