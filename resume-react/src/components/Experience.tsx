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
  <div key={index}>
    <div>{job.duration}</div>
    <div>{job.role}</div>
    <div>{job.company}</div>
    <div>{job.location}</div>
    <ul>
      {job.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)}
    </ul>
  </div>);
});
  return (
    <ExperienceContainer>
        {jobs}
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.div`
  background-color: #fff;
  max-width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: calc(8px + 2vmin);
  color: black;
`;