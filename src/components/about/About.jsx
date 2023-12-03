import React from "react";
import "./about.css";
import AboutUsImg from "../../assets/aboutus.svg";
const About = () => {
  return (
    <section id="about">
      <div className="aboutus_info">
        <h1 className="about_title">Know more about us</h1>
        <p className="aboutus_paragraph">
          We are providing advanced fruits for your health appreciation. Choose
          us and enjoy natural and healthy fruits. Through our services, you can
          order the best quality and organic fruits online. We value our
          customers, interact with them, and understand their requirements. we
          pay attention.
        </p>
      </div>
      <img className="abouts_img" src={AboutUsImg} alt="" />
    </section>
  );
};

export default About;
