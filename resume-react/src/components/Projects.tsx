import React from "react";


interface ProjectsProps {
  projects: any
}
// Must be rendered inside of an ApolloProvider
export default function Projects({projects}: ProjectsProps) {
  return (
    <div>
        {projects}
    </div>
  );
}