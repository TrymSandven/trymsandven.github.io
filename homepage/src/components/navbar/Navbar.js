import React, { useState } from "react";
import "./Navbar.css";
import { BrowserRouter, Route, Link} from "react-router-dom";

import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="container navbar">
            <div className="logo">
                <p className="logo-text">Portefølje</p>
            </div>
            <menu>
                <ul
                    className="nav-links"
                    id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
                >
                    <li>
                        <Link to={"/"}>Hjem</Link>
                    </li>
                    <li>
                        <a href="#me">Om meg</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portefølje</a>
                    </li>
                    <li className="nav-btn">
                        <Button text={"Kontaktinfo"} btnClass={"btn-dark"} href={"#contact"} />
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (
                    <RiCloseLine color="#fff" size={30} />
                ) : (
                    <AiOutlineBars color="#fff" size={27} />
                )}
            </div>
        </nav>
    );
};

export default Navbar;