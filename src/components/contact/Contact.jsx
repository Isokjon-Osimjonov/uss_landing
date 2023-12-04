// import React from "react";
// import "./contact.css";
// const Contact = () => {
//   return <section id="contact"></section>;
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f4j02kf",
      "template_y1cf82s",
      form.current,
      "3iXzyN0w1eBUUKcs2"
    );
    e.target.reset();
  };
  const phoneNumber = "+998972700505"; // Replace with your desired phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const emailAddress = "ulkansardor@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <section id="contact">
      <div className="cus_div">
        <h1 className="cus">Contact us</h1>
      </div>

      <div className="conatiner contact__container">
        <div className="contact__options">
          <article onClick={handleEmailClick} className="contact__option">
            <h4 className="contact_title">Email</h4>
            <h5 className="contact_ways">isoqjon2004@gmail.com</h5>
          </article>

          <article onClick={handleCall} className="contact__option">
            <h4 className="contact_title">Call</h4>
            <h5 className="contact_ways">+998972700505</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
