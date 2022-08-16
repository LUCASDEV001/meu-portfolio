import React from "react";

import styled from "styled-components";

import ScrollTop from "../components/ScrollTop";

import Card from "../components/Card";

import { useApi } from "../hooks/useApi";

import { motion } from "framer-motion";

import { pageAnimation } from "../animation";

const Portfolio = () => {
  const { data } = useApi("/portfolio");

  return (
    <PortfolioList
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnimation}
    >
      <CardList>
        {data?.data?.map((project) => {
          return <Card key={project.slug} project={project} />;
        })}
      </CardList>
      <ScrollTop />
    </PortfolioList>
  );
};

const PortfolioList = styled(motion.div)`
  min-height: 90vh;
  overflow: hidden;
  padding: 5rem 10rem;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default Portfolio;
