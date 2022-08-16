import React from "react";
import moment from "moment";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <StyledCard>
      <Link to={`/portfolio/${project.slug}`}>
        <Content>
          <Image src={project.image} />
          <Info>
            <h3>{project.title}</h3>
            <h4>{moment(project.createdAt).format("MMM-YYYY")}</h4>
            <p>{project.description}</p>
          </Info>
        </Content>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  background-color: ##1b1b1b;
  min-height: 30vh;
  box-shadow: 0 2px 6px 1px #0087f1;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 70vh;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;

const Info = styled.div`
  text-align: left;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    padding-top: 2rem;
  }
  p {
    color: #ccc;
  }
`;

export default Card;
