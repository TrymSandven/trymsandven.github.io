import { TbBrandPython } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";

export const featureList = [
  {
    id: 1,
    icon: <TbBrandPython color="#0a1930" size={30} />,
    heading: "Python",
    text: "Gjennom studiet har primærspråket vert Python. Dette er eit språk eg føler eg beherskar og har erfaring med biblioteka Pandas, Numpy, Matplotlib og Scikit-learn for å nemne nokon.",
  },
  {
    id: 2,
    icon: <AiOutlineConsoleSql color="#0a1930" size={30} />,
    heading: "SQL",
    text: "SQL er eit språk eg har brukt i fleire samanhengar. Eg har brukt SQL både på universitetet og i jobb samanheng. Eg har erfaring med å bruke SQL både til å opprette databasar og for å hente ut data frå databasar.", 
  },
  {
    id: 3,
    icon: <FaVuejs color="#0a1930" size={30} />,
    heading: "Vue",
    text: "Vue er eit rammeverk eg har brukt til å lage nettsider. Eg har brukt Vue til å lage nettsider for Sikt – Kunnskapssektorens tjenesteleverandør da det var rammeverket dei brukte. Med tiden hos Sikt føler eg at det er eit rammeverk eg beherskar godt.",
  },
  {
    id: 4,
    icon: <TbBrandTypescript color="#0a1930" size={30} />,
    heading: "Typescript",
    text: "Typescript er eit språk eg i hovudsak har brukt i samband med Vue. Derfor er dette også eit språk eg føler eg beherskar godt.",
  },
];
