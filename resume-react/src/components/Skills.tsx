import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Skills = () => {
  const skills_query = gql`query GetSkills { 
    skills {
      _id,
      type,
      name
    }
  }`;
  const { data, loading, error } = useQuery(skills_query);
  if (loading) return (<Loading>...loading</Loading>);
  const { skills } = data;
  console.log(skills);
  return (
    <>
      {skills.map((skill: any) => <div key={skill._id}>{skill.name}</div>)}
    </>
  );
}
export default Skills;

/**
 *     <SkillsContainer>
      <SkillsListsContainer>
          <SkillList>
            <SkillType>languages</SkillType>
            <StyledHr></StyledHr>
            {skills.languages.map((language:any, index: any) => <Skill key={index}>{language}</Skill>)}
          </SkillList>    
          <SkillList>
            <SkillType>frameworks</SkillType>
            <StyledHr></StyledHr>
            {skills.frameworks.map((framework: any, index: any) => <Skill key={index}>{framework}</Skill>)}
          </SkillList>
          <SkillList>
            <SkillType>dev_tools</SkillType>
            <StyledHr></StyledHr>
            {skills.dev_tools.map((dev_tool: any, index: any) => <Skill key={index}>{dev_tool}</Skill>)}
          </SkillList>
        </SkillsListsContainer>
    </SkillsContainer>
 */

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
  background-color: #000
`;

const Skill = styled.div`
  
  line-height: 1.5em;
  background-color: #DDD;
  border-radius: 8px;
  padding: 1vh 1vw 1vh 1vw;
  margin-bottom: 1em;
  margin-right: calc(10px + 1vmin);
  font-size: calc(10px + 1vmin);
  color: black;
`;
const Loading = styled.div`
  margin: auto;
  padding: 0 8vw 0 8vw;
`;