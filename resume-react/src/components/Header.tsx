import React from "react";
import styled from "@emotion/styled";

import Navigation from './Navigation';

const Header = () => {
  const first_name = "Jonathan";
  const last_name = "Crawford";
  const email = "jonathantcrawford@icloud.com";
  const phone = "(585)-520-6582";
  const links = [
    {title: "linkedin", url: "https://www.linkedin.com/in/jonathantcrawford/"},
    {title: "github", url: "https://github.com/jonathantcrawford"}
  ]; 

  return (
    <HeaderContainer>
      <ContactInfo>
        <Name>{[first_name,last_name].join(" ")}</Name>
        <Email>{email}</Email>
        <Phone>{phone}</Phone>
      </ContactInfo>
      <HeaderLinks>
        <NavigationLinks/>
        <SocialLinks>
          {links.map((link:any,index: any) => <SocialLink key={index} href={link.url} target="_blank">{link.title}</SocialLink>)}
        </SocialLinks>
      </HeaderLinks>
    </HeaderContainer>
  )
}
export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  margin: 0px;
  padding: 4vh 8vw 2vh 8vw;
  box-sizing: border-box;
  display: block;
`;

const ContactInfo = styled.ul`
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

const Name = styled.li`
  font-family: 'Bitter', serif;
  font-size: calc(26px + 2vmin);
  color: black;
  line-height: 1.5em;
`;

const Email = styled.li`
  font-family: 'Trispace', sans-serif;
  font-size: calc(8px + 2vmin);
  color: black;
  line-height: 1.5em;
`;

const Phone = styled.li`
  font-family: 'Trispace', sans-serif;
  font-size: calc(8px + 2vmin);
  color: black;
  line-height: 1.5em;
`;

const HeaderLinks = styled.div`
  margin-top: 6vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

const NavigationLinks = styled(Navigation)`
  flex: 1;
  margin-bottom: 1em;
`

const SocialLinks = styled.div`
  flex: 0;
  align-self: flex-end;
  margin-bottom: 1em;
`;

const SocialLink = styled.a`
  font-family: 'Jost', sans-serif;
  margin-right: 50px;
  font-size: calc(16px + 2vmin);
  color: black;
`;

