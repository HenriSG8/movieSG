import React, { useState } from "react";
import logo from '../public/imagem_2023-09-23_144701980.png';


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav>
        <a className="logo" href="/">
          <img src={logo} alt="Logo" className="logo" width="200px" />
        </a>
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Cadastro">Cadastro</a></li>
          <li><a href="/">Filmes_Favoritos</a></li>
          <li><a href="/Filmee">tes</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
