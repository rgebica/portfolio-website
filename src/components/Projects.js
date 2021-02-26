import React from "react";

const Projects = () => {
    const [header] = React.useState({
        subHeading: "Sample Projects",
        text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    });
    const [state] = React.useState([
        {
            id: 1,
            heading: "Online Gradebook",
            msg1: "Description:",
            msg2: "Application corresponding to an electonic gradebook. App allows of creating an account, which on the basis of an e-mail will determine our function and will send a confirmation link. What is more,this application displays grades along with an average grade for each subject, midterm grade, attendance and absence; also with divisions into subjects, as well as attendance-absence balance. System also calculate weight average, presence count, presence percentage. Teacher can add semester and final grades",
            msg3: "Stack:",
            msg4: "Java, Functional Programming (lambdas, streams), Spring, Spring Security, Spring Data, Hibernate, JPA, JUnit5, Spock&Groovy, PostgreSQL, Java Script, React, Material Ui, Bootstrap"
        },
        {
            id: 2,
            heading: "Vet Clinic - demo",
            msg1: "Description:",
            msg2: "Demo for vet clinic. Aplication\n" +
                "\n" +
                "allows to list appointments of certain doctor for given day ,customer to cancel his appointment , doctor to check his visits by dat , doctor to check all his visits (open and taken), create new terms",
            msg3: "Stack:",
            msg4: "Java, Functional Programming (lambdas, streams), Spring, Spring Data, Hibernate, JPA, JUnit5, Spock&Groovy, PostgreSQL"

        },
        {
            id: 3,
            heading: "Matrix Determinant Calculator ",
            msg2: "Application to calculate matrix determinant from created by user matrx",
            msg3: "Stack:",
            msg4: "Java, Spring, Java Script, React, Material Ui, Bootstrap"

        },
    ]);
    return (
        <div className="projects">
            <div className="container">
                <div className="common">
                    <h3 className="heading">{header.mainHeader}</h3>
                    <h1 className="mainHeader">{header.subHeading}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row">
                    {state.map((projects) => (
                        <div className="col-4" key={projects.id}>
                            <div className="project">
                                <div className="projectHeading">{projects.heading}</div>
                                <ul>
                                    <li>{projects.msg1}</li>
                                    <li>{projects.msg2}</li>
                                    <li>{projects.msg3}</li>
                                    <li>{projects.msg4}</li>
                                </ul>
                                <div className="project__btn">
                                    <a style={{ color: 'white' }} href="" className="btn btn-outline">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
