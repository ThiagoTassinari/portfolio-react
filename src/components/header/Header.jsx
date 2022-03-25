import React from "react";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Inicio",
    url: "#home",
  },
  {
    display: "Sobre",
    url: "#about",
  },
  {
    display: "Serviços",
    url: "#services",
  },
  {
    display: "Portfolio",
    url: "#portfolio",
  },
  {
    display: "Contatos",
    url: "#contact",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-center justify-content-between">
          <div className="logo">
            <h5>Thiago</h5>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right">
            <button className="btn">Vamos Conversar</button>
            <span className="mobile__menu">
              <i class="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
