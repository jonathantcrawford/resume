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
  const links = contact_info.links.map((link,index) => <Link key={index} href={link.url}>{link.title}</Link>);
  return (
    <ContactUnOrderedList>
        <ContactListItem>
          <Name>{contact_info.first_name} {contact_info.last_name}</Name>
          <Email>{contact_info.email}</Email>
          <Phone>{contact_info.phone}</Phone>
        </ContactListItem>
        <ContactListItem>
          {links}
        </ContactListItem>
    </ContactUnOrderedList>
  );
}

const ContactUnOrderedList = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  background-color: #bbb;
  min-height: 10vh;
  max-width: 100%;
  margin: 0px;
  padding: 2vh 4vw 4vh 4vw;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: calc(12px + 2vmin);
  color: black;
`;

const ContactListItem = styled.li`
  margin: 1vh 5vw 0 5vw;
  align-self: flex-end;
  display: inline-block;
`;

const Name = styled.div`
  font-size: calc(16px + 2vmin);
  color: black;
`;

const Email = styled.div`
  font-size: calc(8px + 2vmin);
  color: black;
`;

const Phone = styled.div`
  font-size: calc(8px + 2vmin);
  color: black;
`;

const Link = styled.a`
  margin-right: 15px;
  font-size: calc(10px + 2vmin);
  color: black;
`;