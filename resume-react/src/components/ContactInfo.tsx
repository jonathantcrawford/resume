import React from "react";
import styled from "@emotion/styled";

interface ContactProps {
  contact_info: {
    first_name: any,
    last_name: any,
    email: any,
    phone: any,
    links: [{
      title: any,
      url: any
    }]
  }
}
// Must be rendered inside of an ApolloProvider
export default function Contact({contact_info}: ContactProps) {
  const links = contact_info.links.map((link,index) => <Link key={index}>{link.title}: <a href={link.url}>{link.url}</a></Link>);
  return (
    <ContactContainer>
        <ul>
          <Name>{contact_info.first_name} {contact_info.last_name}</Name>
          <Email>{contact_info.email}</Email>
          <Phone>{contact_info.phone}</Phone>
        </ul>
        <ul>
          {links}
        </ul>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  background-color: #bbb;
  min-height: 20vh;
  max-width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Name = styled.div`
  font-size: calc(12px + 2vmin);
  color: black;
`;

const Email = styled.div`
  font-size: calc(4px + 2vmin);
  color: black;
`;

const Phone = styled.div`
  font-size: calc(4px + 2vmin);
  color: black;
`;

const Link = styled.div`
  font-size: calc(4px + 2vmin);
  color: black;
`;