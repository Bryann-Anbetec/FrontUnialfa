import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersForm from "./users/usersForm";
import UsersList from "./users/usersList";
import "./assets/ChatGPT Image 6 de jun. de 2025, 11_47_12.png";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <div className="navbar-container">
          <span className="brand">
            <span role="img" aria-label="ferramenta">
              🔧
            </span>{" "}
            Ferragista do Bairro
          </span>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuários</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/cadastrar" element={<UsersForm />} />
          <Route path="/usuarios" element={<UsersList />} />
          <Route
            path="/"
            element={
              <div className="card welcome">
                <div className="banner">
                  <img
                    src={require("./assets/ChatGPT Image 6 de jun. de 2025, 11_47_12.png")}
                    alt="Ferramentas"
                    className="banner-img"
                  />
                  <div className="banner-text">
                    <h2>Bem-vindo à Ferragista do Bairro!</h2>
                    <p>Tradição, confiança e tudo para sua obra ou reforma.</p>
                  </div>
                </div>
                <p>
                  Seu sistema de cadastro de usuários com visual moderno e
                  seguro.
                  <br />
                  Use o menu acima para navegar.
                </p>
              </div>
            }
          />
        </Routes>
      </div>
      <footer className="footer">
        <p>
          Ferragista do Bairro © 2025 | Rua das Ferramentas, 123 | (62)
          98274-9331
        </p>
      </footer>
    </Router>
  );
};

export default App;
