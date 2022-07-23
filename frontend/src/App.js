import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Roteamento
import { Route, Routes } from "react-router-dom";

//Components
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
