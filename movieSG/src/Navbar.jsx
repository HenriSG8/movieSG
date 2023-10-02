import React, { useState, useEffect } from "react";
import logo from '../public/imagem_2023-10-01_203735506-removebg-preview.png';
import "../src/css/Home.css";
import "../src/css/DarkMode.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
        <a href="/" className="logo"> <img src={logo} alt="Logo" width="200" /> </a>
        <button className="hamburger" onClick={handleHamburgerClick}></button>
        <ul className="nav-list">
          <li><a href="/Login" className="log1">Login</a></li>
          <li><a href="/Cadastro">Cadastro</a></li>
          <li><a href="/Favoritos">Filmes Favoritos</a></li>
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
