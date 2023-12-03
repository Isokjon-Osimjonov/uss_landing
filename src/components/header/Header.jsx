import React from "react";
import "./Header.css";
import BCIMAGE from "../../assets/bcimg.png";
function Header() {
  return (
    <div>
      <header id="home">
        <div className="info">
          <h1 className="title">Discover the Best Dried Fruit Collection</h1>
            <button className="cta-button">
              <a href="#contact">CONTACT</a>
            </button>
        </div>
        <div>
          <img className="image" src={BCIMAGE} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
