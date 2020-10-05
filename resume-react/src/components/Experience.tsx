import React from "react";
import styled from "@emotion/styled";

interface ExperienceProps {
  experience: [{
    company: any,
    duration: any,
    highlights: [],
    location: any,
    role: any
  }]
}

// Must be rendered inside of an ApolloProvider
export default function Experience({experience}: ExperienceProps) {
  const jobs = experience.map((job, index) => {
  return (
  <ExperienceStyled key={index}>
    <Company>{job.company}</Company>
    <Role>{job.role}</Role>
    <Duration>{job.duration}</Duration>
    <Location>{job.location}</Location>
    <Highlights>
      {job.highlights.map((highlight, index) => <Highlight key={index}>{highlight}</Highlight>)}
    </Highlights>
  </ExperienceStyled>);
}).reverse();
  return (
    <ExperienceContainer>
        {jobs}
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.div`
  background-color: #fff;
  max-width: 100%;
  margin: 0px;
  padding: 8vh 4vw 0 4vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: calc(8px + 2vmin);
  color: black;
`;

const ExperienceStyled = styled.div`
  margin: 0 5vw 5vh 5vw;
`;

const Company = styled.div`
  font-size: calc(10px + 2vmin);
`;

const Role = styled.div`
  font-size: calc(8px + 2vmin);
`;

const Duration = styled.div`
  font-size: calc(8px + 2vmin);
`;

const Location = styled.div`
  font-size: calc(8px + 2vmin);
`;

const Highlights = styled.ul`
  padding-inline-start: 20px;
`;

const Highlight = styled.li`
  margin: 2vh 0 2vh 0;
`;