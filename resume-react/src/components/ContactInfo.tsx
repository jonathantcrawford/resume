import React from "react";


interface ContactProps {
  contact_info: any
}
// Must be rendered inside of an ApolloProvider
export default function Contact({contact_info}: ContactProps) {
  return (
    <div>
        {contact_info.first_name} {contact_info.last_name}
    </div>
  );
}