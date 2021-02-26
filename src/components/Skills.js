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
        mainHeader: "SKILLS",
        subHeading: "My Skills",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting\
          industry. Lorem Ipsum standard dummy text.",
    });
    const [state] = React.useState([
        {
            id: 1,
            icon: <FaJava className="commonIcons" />,
            heading: "Java version 8 +",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
              industry. simply dummy",
        },
        {
            id: 2,
            icon: <SiSpring className="commonIcons" />,
            heading: "Spring",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 3,
            icon: <FaDatabase className="commonIcons" />,
            heading: "Hibernate / JPA",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 4,
            icon: <SiPostgresql className="commonIcons" />,
            heading: "PostgreSQL",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 5,
            icon: <FaGitAlt className="commonIcons" />,
            heading: "Git",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 6,
            icon: <SiApachemaven className="commonIcons" />,
            heading: "Apache Maven",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 7,
            icon: <BiTestTube className="commonIcons" />,
            heading: "Unit testing",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 8,
            icon: <SiJavascript className="commonIcons" />,
            heading: "Java Script",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
        },
        {
            id: 9,
            icon: <SiReact className="commonIcons" />,
            heading: "React",
            text:
                "Lorem Ipsum is simply dummy text of the printing typesetting\
                industry. simply dummy",
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
