import React from "react";

import {
    FiDownload
} from "react-icons/fi";

import {
    FaLinkedin,
    FaFacebookF,
    FaTwitter,
    FaPlay,
    FaGithub,
    FaBitbucket
} from "react-icons/fa";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Banner = () => {
    const [state] = React.useState({
        welcome: "Hello!",
        title: "I am Rafał Gębica",
        text:
            "I am aspiring to be a Junior Java Developer. Here is my portfolio, I will say something about myself, show you my skills and projects which I have recently completed or I am still working on.",
         image: "/images/2794209.png",
    });

    return (
        <header className="header" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <a target="_blank" href={"https://www.facebook.com/profile.php?id=100002916904666"}><FaFacebookF className="headerIcon"/></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={"https://www.linkedin.com/in/rafa%C5%82-g%C4%99bica-200198187/"}><FaLinkedin className="headerIcon"/></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={"https://github.com/rgebica"}><FaGithub className="headerIcon"/></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href={"https://bitbucket.org/rafal_gebica/"}><FaBitbucket className="headerIcon"/></a>
                                    </li>
                                </ul>
                                <h2>{state.welcome}</h2>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline" class={"disabled"}>
                                        Download my CV
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a target="_blank" href="https://drive.google.com/file/d/1JPctbaRANnntUVCxy70CSNVP8Fn5wyBi/view?usp=sharing" className="btn btn-smart">
                                        <FiDownload className="play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.image} alt="photo" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
