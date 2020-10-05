import React from "react";

interface SkillsProps {
  skills: any
}
// Must be rendered inside of an ApolloProvider
export default function Skills({skills}: SkillsProps) {
  return (
    <div>
        {skills.languages[0]}
    </div>
  );
}