import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <h1 className="logo">
        <a href="#home" onClick={() => setActiveNav("#home")}>
          USS
        </a>
      </h1>
      <div className="links">
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#products"
          onClick={() => setActiveNav("#products")}
          className={activeNav === "#products" ? "active" : ""}
        >
          Products
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>
      <div className="lang">
        <button id="en">EN</button>
        <button id="ru">RU</button>
      </div>
    </nav>
  );
};

export default Nav;
