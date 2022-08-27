import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0g5958s",
        "template_fidpvnm",
        formRef.current,
        "user_5ldkOnP6OrKc6oWUEmb18"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">Let's grab a coffe and build exciting</h2>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              +91 7889226461
            </div>
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" />
              piyushghosh2021@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="" className="c-icon" /> Bangalore, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />

            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="sub"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Mail Us! This functionality is genuinely working"
              name="message"
            />

            <button>Submit</button>
            {done && (
              <div className="thankyou" style={{ color: "Green" }}>
                Thank You
              </div>
            )}
            {error && (
              <div className="thankyou" style={{ color: "Red" }}>
                Fill The Form
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
