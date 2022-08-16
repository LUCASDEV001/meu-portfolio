import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Roteamento
import { Route, Routes, useLocation } from "react-router-dom";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

//Components
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./components/PortfolioDetail";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import { LoginForm, SignupForm } from "./components/auth/Authentication";

function App() {
  const location = useLocation();
  library.add(fab, faDatabase);
  return (
    <div>
      <GlobalStyle />
      {location.pathname !== "/admin" && <Nav />}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/contato" element={<ContactMe />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cadastro" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
