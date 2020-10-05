import React from "react";

interface ExperienceProps {
  experience: any
}

// Must be rendered inside of an ApolloProvider
export default function Experience({experience}: ExperienceProps) {
  return (
    <div>
        {experience[0].company}
    </div>
  );
}