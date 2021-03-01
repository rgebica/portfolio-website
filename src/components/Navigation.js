import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import {Link} from 'react-scroll'
import About from "./About";

const Navigation = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        {/*<div className="navbar__left-logo">*/}
                        {/*    <img src="/images/icon.png" alt="logo" />*/}
                        {/*</div>*/}
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li className={"home"}>
                                <Link to="home" spy={true} smooth={true}>HOME</Link>
                            </li>
                            <li>
                                <Link to="about" spy={true} smooth={true}>ABOUT</Link>
                            </li>
                            <li>
                                <Link to="skills" spy={true} smooth={true}>SKILLS</Link>
                            </li>
                            <li>
                                <Link to="projects" spy={true} smooth={true}>PROJECTS</Link>
                            </li>
                            <li>
                                <Link to="skills" spy={true} smooth={true}>CONTACT</Link>
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    );
};

export default Navigation;
