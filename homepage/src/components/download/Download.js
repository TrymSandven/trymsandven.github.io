import React, { useEffect } from "react";
import "./Download.css";

import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="contact">
      <div className="container contact" data-aos="fade-up">
        <h2>Kontakt informasjon</h2>
        <p className="u-text-small u-text-light">
          Om dette skulle være interessant for deg, ta kontakt med meg på en av
          disse kanalene
        </p>
        <div className="contact-icons">
          <a href="https://github.com/TrymSandven" target="_blank">
            <div className="contact-icon">
              <VscGithubInverted size={30} color="#FFF" /> <p>Github</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/trym-sandven-29200522b/"
            target="_blank"
          >
            <div className="contact-icon">
              <FaLinkedinIn size={30} color="#FFF" /> <p>LinkedIn</p>
            </div>
          </a>
          <a href="mailto: trymsandven@gmail.com" target="_blank">
            <div className="contact-icon">
              <AiOutlineMail size={30} color="#FFF" /> <p>Mail</p>
            </div>
          </a>
          <a href="https://www.facebook.com/trym.sand/" target="_blank">
            <div className="contact-icon">
              <AiFillFacebook size={30} color="#FFF" /> <p>Facebook</p>
            </div>
          </a>
        </div>
        <div />
      </div>
    </section>
  );
};

export default Download;
