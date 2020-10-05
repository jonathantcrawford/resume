import React from "react";
import styled from "@emotion/styled";

interface SkillsProps {
  skills: {
    languages: [],
    frameworks: [],
    dev_tools: []
  }
}
// Must be rendered inside of an ApolloProvider
export default function Skills({skills}: SkillsProps) {
const languages = skills.languages.map((language,index) => <li key={index}>{language}</li>);
const frameworks = skills.frameworks.map((framework,index) => <li key={index}>{framework}</li>);
const dev_tools = skills.dev_tools.map((dev_tool,index) => <li key={index}>{dev_tool}</li>);
  return (
    <SkillsContainer>
      <SkillList>
        <SkillType>languages</SkillType>
        <StyledHr></StyledHr>
        {languages}
      </SkillList>    
      <SkillList>
        <SkillType>frameworks</SkillType>
        <StyledHr></StyledHr>
        {frameworks}
      </SkillList>
      <SkillList>
        <SkillType>dev_tools</SkillType>
        <StyledHr></StyledHr>
        {dev_tools}
      </SkillList>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  max-width: 100%;
  padding: 8vh 4vw 0 4vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const SkillList = styled.ul`
  list-style-type: none;
  margin: 0 5vw 5vh 5vw;
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