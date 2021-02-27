import React from "react";
import {
    FaGithub,
    FaCamera,
    FaCircleNotch,
    FaApple,
    FaFileVideo,
    FaSearchDollar,
    FaJava,
    FaDatabase,
    FaGitAlt
} from "react-icons/fa";

import {
    SiSpring,
    SiPostgresql,
    SiApachemaven,
    SiJavascript,
    SiReact
} from "react-icons/si";

import {
    BiTestTube
} from "react-icons/bi";

const Skills = () => {
    const [header] = React.useState({
        subHeading: "My Skills",
        text:
            "",
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaJava className="commonIcons" />,
            heading: "Java version 8+",
            text:
                "Basic knowledge of Java language in version 8+ with functional programming (lambdas, streams). ",
        },
        {
            id: 2,
            icon: <SiSpring className="commonIcons" />,
            heading: "Spring",
            text:
                "Basics from Spring, Spring Data, Spring Security, Spring MVC, Beans",
        },
        {
            id: 3,
            icon: <FaDatabase className="commonIcons" />,
            heading: "Hibernate / JPA",
            text:
                "In Hibernate I know how to manage database, create entities, relations. I can write query using JPA and JPQL.",
        },
        {
            id: 4,
            icon: <SiPostgresql className="commonIcons" />,
            heading: "PostgreSQL",
            text:
                "I know SQL language on a good level. I can create basic and advanced queries, tables, triggers, procedures, insert data and manage database. ",
        },
        {
            id: 5,
            icon: <FaGitAlt className="commonIcons" />,
            heading: "Git",
            text:
                "I can create repository and manage my repository. I know how to commmit my changes and pushing to choosen branch. I have basic knowledge of GIt which allow me to join team project.",
        },
        {
            id: 6,
            icon: <SiApachemaven className="commonIcons" />,
            heading: "Apache Maven",
            text:
                "I know how to add new dependencies and manage currently added. Besides I know Maven's commands to control project ",
        },
        {
            id: 7,
            icon: <BiTestTube className="commonIcons" />,
            heading: "Unit testing",
            text:
                "I can write basics unit and integrated tests and I know how TDD methodology works",
        },
        {
            id: 8,
            icon: <SiJavascript className="commonIcons" />,
            heading: "Java Script",
            text:
                "I have recently started learning Java Script and I know only basics from this language to write simple code lines.",
        },
        {
            id: 9,
            icon: <SiReact className="commonIcons" />,
            heading: "React",
            text:
                "I know Reacts's basics like States, Redux and libraries for this framework. ",
        },
    ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-4 bgMain">
                                <div className="services__box">
                                    {info.icon}
                                    <div className="services__box-header">{info.heading}</div>
                                    <div className="services__box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
