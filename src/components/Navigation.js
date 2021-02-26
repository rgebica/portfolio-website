import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Navigation = () => {
    const [state, setState] = React.useState(true);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="/images/icon.png" alt="logo" />
                        </div>
                    </ul>
                    {state ? (
                        <ul className="navbar__right">
                            <li>
                                <a href="">HOME</a>
                            </li>
                            <li>
                                <a href="">ABOUT ME</a>
                            </li>
                            <li>
                                <a href="">SKILLS</a>
                            </li>
                            <li>
                                <a href="">PORTFOLIO</a>
                            </li>
                            <li>
                                <a href="">CONTACT</a>
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
