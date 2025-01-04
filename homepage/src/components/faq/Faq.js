import React, { useEffect } from "react";
import "./Faq.css";
import pdf from "../../assets/UtfyllendeOnePage.pdf";

import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    title: "Prototype arbeid for NTB Media",
    description:
      "Semesteroppdrag for NTB Media. Laga ein prototype for automatisering av værnyheiter..",
    url: " https://teklab.uib.no/artikler/vaer-robot-a-effektivisere-vaer-nytt-gjennom-automatiserte-tekster/",
  },
  {
    title: "Videreutvikling av Surveybanken",
    description:
      "Løysning som gjer det mogleg for Sikt å sjå kva opne datasett i Surveybanken vert brukt til.",
    url: "https://1drv.ms/p/s!AhaY_EBXSFXEhM4duMlt7NotYPalRQ?e=XlOyIp",
  },
  {
    title: "Maskinlæring med data frå Spotify",
    description:
      "Semesteroppgåve i maskinlæring som ser på data frå Spotify og prøver å predikere om eit album kjem til å vere populært eller ikkje.",
    url: "https://github.com/TrymSandven/Gruppeeksamen_2022/blob/main/group_exam22.ipynb",
  },
  {
    title: "Utvikling av ESS Dataportal",
    description:
      "I sommarjobben hos Sikt var eg med å utvikle en nettside for ESS. Nettsida er laget med Vue, Typescript og Tailwind. ",
    url: pdf,
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
        <h2>Portefølje</h2>
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
