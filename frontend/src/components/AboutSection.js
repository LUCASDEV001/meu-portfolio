import React from "react";
import { About, Description, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <h2>Lucas Cavalcante</h2>
        <h2>Software Engineer</h2>

        <p>
          Graduado em Análise e Desenvolvimento de sistemas, possuo uma grande
          paixão pelo desenvolvimento de software desde o primeiro contato. As
          tecnologias com as quais gosto de trabalhar inclui toda a MERN stack
          (Mongo, Express, React e Node), além de ter experiências com o C#
          (Windows Forms e ASP.NET MVC).
        </p>
        <button>Contate-me</button>
      </Description>
      <Image>
        <img
          src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </Image>
    </About>
  );
};

export default AboutSection;
