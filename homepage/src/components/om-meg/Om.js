import React, { useEffect } from "react";
import "./Om.css";
import Feature from "./Skill";
import { featureList } from "./data";

import bilde from "../../assets/om-meg.jpg";
import { BsFillBookmarkStarFill } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
      <section id="me">
        <div className="container features">
          <div className="u-title" data-aos="fade-up">
            <BsFillBookmarkStarFill color="orangered" size={30} />
            <h2>Om meg</h2>
            <p className="u-text-small">
            Eg er en utviklar med bachelorgrad i informasjonsvitskap frå UiB. 
            Gjennom studieløpet mitt har eg fått prøve meg på mykje forskjellig. 
            Alt frå maskinlæring, databasebehandling til UX design. 
            I jobben hos Sikt – Kunnskapssektorens tjenesteleverandør var eg med å utvikle ei nettside for ESS samt vere med på å vidareutvikle Surveybanken. 
            Nettsidene er laget med Vue, Typescript og Tailwind. Eg ser på meg sjølv som en god teamspiller som liker å jobbe med andre. 
            Eg er også veldig glad i å løyse problema og å lære nye ting.
            </p>
          </div>
          <div className="features-content">
            <div className="features-left" data-aos="fade-right">
              <img src={bilde} alt="phone" />
            </div>
            <div className="features-right" data-aos="fade-left">
              {featureList.map((feature) => (
                  <Feature
                      key={feature.id}
                      icon={feature.icon}
                      heading={feature.heading}
                      text={feature.text}
                  />
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};
export default Features;