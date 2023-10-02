import React, { useState, useEffect } from "react";
import logo from '../public/imagem_2023-10-01_203735506-removebg-preview.png';
import "../src/css/Home.css";
import "../src/css/DarkMode.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handletoggled = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("dark", isDark ? "dark" : "light");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("dark");
    if (savedMode === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <header>
      <nav>
        <a className="logo" href="/">
          <img src={logo} alt="Logo" width="200" />
        </a>
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-list ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="/Login" className="log1">Login</a></li>
          <li><a href="/Cadastro">Cadastro</a></li>
          <li><a href="/Favoritos">Filmes_Favoritos</a></li>
          <div className="modo-dark">
            <label className="switch">
              <input type="checkbox" onClick={handletoggled} />
              <span className="slider round"></span>
            </label>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
