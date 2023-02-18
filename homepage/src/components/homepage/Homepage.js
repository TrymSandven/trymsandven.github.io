import React, { useEffect } from "react";
import "./Homepage.css";
import { BrowserRouter, Route, Link} from "react-router-dom";

import { BsBriefcase } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";



const Homepage = () => {
    return (
        <section id="links">
            <div className="container contact">
                <h2 className={"u-title u-text-light"}>Nyttige lenker</h2>
                <p className="u-text-small u-text-light">
                    Om du skulle være interesert i å komme i kontakt med meg eller sjå på porteføljen min. Trykk på ein av linkene under.
                </p>
                <div className="contact-icons">
                    <Link to={"/portfolio"}>
                        <div className="contact-icon">
                            <BsBriefcase size={30} color="#FFF" /> <p>Portefølje</p>
                        </div>
                    </Link>
                    <a href="https://github.com/TrymSandven" target="_blank">
                        <div className="contact-icon">
                            <VscGithubInverted size={30} color="#FFF" /> <p>Github</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/trym-sandven-29200522b/" target="_blank">
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

export default Homepage;
