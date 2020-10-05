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
        <ul>{languages}</ul>
        <ul>{frameworks}</ul>
        <ul>{dev_tools}</ul>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  background-color: #fff;
  max-width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-size: calc(8px + 2vmin);
  color: black;
`;