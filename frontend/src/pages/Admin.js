import React from "react";

import { Tabs, Tab, Container } from "react-bootstrap";

import PortfolioList from "../components/admin/PortfolioList";

import WelcomeTab from "../components/admin/WelcomeTab";

import { Navigate } from "react-router-dom";

import Userfront from "@userfront/react";

import jwt_decode from "jwt-decode";

Userfront.init("9nyp76rb");

const Admin = ({ location }) => {
  const projectId = "9nyp76rb";

  if (!Userfront.accessToken()) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  }

  const accessData = jwt_decode(Userfront.accessToken());
  const userData = jwt_decode(Userfront.idToken());

  const roles = accessData.authorization[projectId].roles;
  const isAdmin = roles.includes("admin");

  if (!isAdmin) {
    return (
      <Navigate
        to={{
          pathname: "/",
          state: { from: location },
        }}
      />
    );
  }

  console.log("Access", userData);
  console.log("user", accessData);

  const access = JSON.stringify(accessData);
  const user = JSON.stringify(userData);

  return (
    <Container fluid>
      <div className="bg-white text-dark p-5">
        <h1>Painel Administrativo</h1>
      </div>

      <Tabs
        transition={false}
        defaultActiveKey="home"
        id="tab-navigation"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <WelcomeTab />
        </Tab>
        <Tab eventKey="portfolio" title="Portfolio">
          <PortfolioList />
        </Tab>
        <Tab eventKey="user" title="User">
          <p>User</p>
          <p>{access}</p>
          <p>{user}</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Admin;
