import React from "react";

//Styled Components
import styled from "styled-components";

//Navigation
import { Link } from "react-router-dom";

const Nav = () => {
  const menuOptions = {
    about: "<Sobre mim />",
    portfolio: "<Portfólio />",
    contact: "<Contato />",
  };
  return (
    <StyledNav>
      <h1>
        <Link to="/">Lucas Cavalcante</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">{menuOptions.about}</Link>
        </li>
        <li>
          <Link to="/portfolio">{menuOptions.portfolio}</Link>
        </li>
        <li>
          <Link to="/contato">{menuOptions.contact}</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: stick;
  top: 0;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

export default Nav;
