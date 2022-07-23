import React from "react";

import styled from "styled-components";

import {
  faGithubSquare,
  faLinkedin,
  faYoutubeSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetworkSection = () => {
  return (
    <Network>
      <Social href="http://github.com/lucasdev001" target="_blank">
        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
        <h3>github.com/lucasdev001</h3>
      </Social>
      <Social
        href="https://www.linkedin.com/in/lucas-cavalcante-5a266a207/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
        <h3>LinkedIn</h3>
      </Social>
      <Social
        href="https://www.youtube.com/channel/UC6ZC2oB63J0y6OYzt7131Xw"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutubeSquare} size="4x" />
        <h3>YouTube</h3>
      </Social>
      <Social
        href="https://api.whatsapp.com/send?phone=5511939547494"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="4x" />
        <h3>WhatsApp</h3>
      </Social>
    </Network>
  );
};

const Network = styled.div`
  padding: 1rem 5rem;
`;

const Social = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    background: #20C100;
    cursor: pointer;
    transition: 0.3s;
  }
  h3 {
    color: grey;
    margin: 2rem;
  }
  color: inherit;
`;

export default SocialNetworkSection;
