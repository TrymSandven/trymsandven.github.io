import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import "../../css/utils.css"

import { TbBrandPython } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
      <section id="header">
        <div className="container header">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span>Trym Sandven</span>
              <span>Webutiklar og maskinlæring</span>
            </h1>
            <p className="u-text-small u-text-light">
              Utviklar med stor interesse for å lære nye
              verktøy og metodar
            </p>
            <div className="header-cta">
              <Button text={"Om meg"} btnClass={"btn-dark"} href={"#features"} />
              <Button
                  text={"Portefølje"}
                  btnClass={"btn-orange"}
                  href={"#portfolio"}
              />
            </div>
          </div>
          <div className="header-right" data-aos="fade-left">
            <TbBrandPython color="#FFF" size={100} />
            <AiOutlineConsoleSql color="#FFF" size={100} />
            <TbBrandTypescript color="#FFF" size={100} />
            <FaVuejs color="#FFF" size={100} />
          </div>
        </div>
        <div className="floating-icon">
          <a href="#me">
            <BsMouse color="#FFF" size={25} className="mouse" />
          </a>
        </div>
      </section>
  );
};

export default Header;