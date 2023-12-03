import React, { useState } from "react";
import "./footer.css";
const Footer = () => {
  const [setActiveNav] = useState("#home");

  return (
    <section id="footer">
      <div className="footer_up">
        <h1 className="footer_logo">
          <a href="#home" onClick={() => setActiveNav("#home")}>
            USS
          </a>
        </h1>
        <h1>+998(94)9302020</h1>
      </div>
      <div className="copyright">
        <p>© USS 2023. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
