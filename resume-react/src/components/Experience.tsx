import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Experience = () => {
  const experience_query = gql`{ 
    content {
      experience {
          company
          duration
          highlights
          location
          role
      }
    }
  }`;
    const { data, loading, error } = useQuery(experience_query);
    if (loading) return (<Loading>...loading</Loading>);
    const { content } = data;
    const { experience } = content;
  return (
    <ExperienceContainer>
      {experience.map((job:any, index:any) => {
          return (
            <ExperienceStyled key={index}>
              <Company>{job.company}</Company>
              <Role>{job.role}</Role>
              <Duration>{job.duration}</Duration>
              <Location>{job.location}</Location>
              <Highlights>
                {job.highlights.map((highlight: any, index: any) => <Highlight key={index}>{highlight}</Highlight>)}
              </Highlights>
            </ExperienceStyled>);
          })}
    </ExperienceContainer>
  );
}
export default Experience;

const ExperienceContainer = styled.div`
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

const ExperienceStyled = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  padding: 4vmin;
  border-radius: 8px;
  box-shadow: 0px 0px 8px -2px #999999;
`;

const Company = styled.div`
  font-size: calc(10px + 2vmin);
  line-height: 1.6em;
`;

const Role = styled.div`
  font-size: calc(8px + 2vmin);
  line-height: 1.6em;
`;

const Duration = styled.div`
  font-size: calc(8px + 2vmin);
  line-height: 1.6em;
`;

const Location = styled.div`
  font-size: calc(8px + 2vmin);
  line-height: 1.6em;
`;

const Highlights = styled.ul`
  padding-inline-start: 20px;
  margin-top: 5vh;
`;

const Highlight = styled.li`
  margin: 2vh 0 2vh 0;
  line-height: 1.6em;
`;

const Loading = styled.div`
  margin: auto;
  padding: 0 8vw 0 8vw;
`;