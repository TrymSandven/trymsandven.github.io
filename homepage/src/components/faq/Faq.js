import React, { useEffect } from "react";
import "./Faq.css";

import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    title: "Prototype arbeid for NTB Media",
    description:
      "Semesteroppdrag for NTB Media. Laget en prototype for en ny automatisering av værnyheter.",
    url: " https://teklab.uib.no/artikler/vaer-robot-a-effektivisere-vaer-nytt-gjennom-automatiserte-tekster/",
  },
  {
    title: "Maskinlæring med data frå Spotify",
    description:
      "Maskinlærring som ser på data frå Spotify og prøver å predikere om eit album kjem til å vere populært eller ikkje.",
    url: "https://github.com/TrymSandven/Gruppeeksamen_2022/blob/main/group_exam22.ipynb",
  },
  {
    title: "Portfolio nettside",
    description:
      "Kjeldekode til denne nettsida har eit eige Github repo. Laget med React og CSS.",
    url: "https://github.com/TrymSandven/Portfolio",
  },
  {
    title: "Analyse av F1 data",
    description:
      "Data analyse av rundetider i F1. Laget med Python og Jupyter Notebook gjennom API.",
    url: "https://github.com/TrymSandven/F1-Dataanalyse",
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="light" id="portfolio">
      <div className="u-title" data-aos="fade-up">
        <MdOutlineLibraryBooks color="orangered" size={30} />
        <h2>Portfolie</h2>
      </div>
      <div>
        <div></div>
        <div className="flex-box" data-aos="zoom-in">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project-name">{project.title}</h3>
              </a>
              <p className="u-text-small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
