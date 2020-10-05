import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import ContactInfo from './ContactInfo';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

// Must be rendered inside of an ApolloProvider
export default function Resume() {
  const { loading, error, data } = useQuery(gql`
    query {
        content {
            _id
                contact_info {
            email
            first_name
            last_name
            links {
                title
                url
            }
            phone
            }
                education {
            degree
            duration
            institution
            }
                experience {
            company
            duration
            highlights
            location
            role
            }
            skills {
            languages
            frameworks
            dev_tools
            }
        }
    }
  `);
  if(loading) {
    return <div>loading</div>
  }
  if(error) {
    return <div>encountered an error: {error}</div>
  }
  console.log(data.content);
  return (
    <div>
      <ContactInfo contact_info={data.content.contact_info}/>
      <Skills skills={data.content.skills}/>
      <Experience experience={data.content.experience}/>
      <Projects projects={data.content.projects}/>
    </div>
  );
}