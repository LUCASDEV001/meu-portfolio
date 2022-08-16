import React from "react";

import { useNavigate } from "react-router-dom";

import { About, Description, Image, Hide } from "../styles";

import { motion } from "framer-motion";

import {
  titleAnimation,
  fade,
  photoAnimation,
  scrollReveal,
} from "../animation";

import { useScroll } from "../hooks/useScroll";

import Wave from "./Wave";

const AboutSection = () => {
  const [element, controls] = useScroll();
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate("/contato");
  };

  return (
    <About
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <motion.h2 variants={titleAnimation}>Lucas Cavalcante</motion.h2>
        <motion.h2 variants={titleAnimation}>
          <span>Software Engineer</span>
        </motion.h2>

        <motion.p variants={fade}>
          Graduado em Análise e Desenvolvimento de sistemas, possuo uma grande
          paixão pelo desenvolvimento de software desde o primeiro contato. As
          tecnologias com as quais gosto de trabalhar inclui toda a MERN stack
          (Mongo, Express, React e Node), além de ter experiências com o C#
          (Windows Forms e ASP.NET MVC).
        </motion.p>
        <button onClick={redirectHandler}>Contate-me</button>
      </Description>
      <Image>
        <motion.div variants={photoAnimation}>
          <img src="https://i.ibb.co/WK9f0pR/profile.png" alt="" />
        </motion.div>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
