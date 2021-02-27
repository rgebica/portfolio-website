import React from "react";

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "Some information about me.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Rafał Gębica" },
        { id: 2, title: "Email:", text: "rgebica@gmail.com" },
        { id: 3, title: "Date of birth:", text: "13-11-1997" },
        { id: 4, title: "Linkedin", text: "/in/rafał-gębica-200198187/" },
        { id: 5, title: "GitHub", text: "/rgebica" },
        { id: 6, title: "BitBucket", text: "/rafal_gebica" },

    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="/images/1234(1).jpg" alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Hi There</h1>
                            <div className="about__info-p1">
                                My name is Rafał Gębica. I am a computer science major on the 4th
                                year at the Tarnow State College.I have been trying to develop my
                                skills in the sphere of back-end using the Java language and
                                frameworks that are available for it for over a year now.
                            </div>
                            <div className="about__info-p2">
                                My soft skills include: communicativeness, creativity, teamworking
                                ability, self-discipline, and good organisation of working time.
                                I like new challenges. I am a fast learner.
                                I want to hone my skills, preferably by doing an internship but I am
                                open to other offers.
                                All my projects I was working on and I am still working are on my
                                GitHub profile.
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
