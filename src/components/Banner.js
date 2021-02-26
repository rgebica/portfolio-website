import React from "react";
import {
    FaLinkedin,
    FaFacebookF,
    FaTwitter,
    FaPlay,
    FaGithub,
    FaBitbucket
} from "react-icons/fa";
const Banner = () => {
    const [state] = React.useState({
        welcome: "Hello!",
        title: "I am Rafał Gębica",
        text:
            "I am aspiring to be a Junior Java Developer. Here is my portfolio and I will say something about myself, show you my skills and projects which I have recently completed or I am still working on.",
        image: "/images/photo.jpg",
    });

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li className="header__ul_facebook">
                                        <FaFacebookF className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaTwitter className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaLinkedin className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaGithub className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaBitbucket className="headerIcon" />
                                    </li>
                                </ul>
                                <h2>{state.welcome}</h2>
                                <h1>{state.title}</h1>
                                <p>{state.text}</p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="" className="btn btn-smart">
                                        <FaPlay className="play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={state.image} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;
