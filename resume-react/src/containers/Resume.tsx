import React from "react";
import styled from "@emotion/styled";

import Header from '../components/Header';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Resume = () => {
  return (
    <ResumeContainer>
      <Header/>
      <Skills/>
      <Experience/>
      <Projects/>
    </ResumeContainer>
  );
}
export default Resume;

const ResumeContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: block;
`;