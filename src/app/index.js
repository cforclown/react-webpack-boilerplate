import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

import hafis from "../assets/images/hafis.png";

function App() {
    return (
        <div className="app">
            <div className="context">
                <h1>REACT WEBPACK BOILERPLATE</h1>
            </div>

            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className="content">
                <div className="avatar-container">
                    <img className="avatar" src={hafis} />
                </div>

                <div className="social-media-container">
                    <div className="social-media">
                        <i className="icon-envelope icon-3x m-right-16"></i>
                        <h4>hafisalrizal@gmail.com</h4>
                    </div>
                </div>

                <div className="social-media-container">
                    <div className="social-media">
                        <a className=" m-right-16" href="https://github.com/cforclown">
                            <i className="icon-github icon-3x"></i>
                        </a>
                        <a className=" m-right-16" href="https://www.linkedin.com/in/hafis-alrizal-a0073017a/">
                            <i className="icon-linkedin-sign icon-3x"></i>
                        </a>
                        <a className=" m-right-16" href="https://www.facebook.com/hafis.alrizal">
                            <i className="icon-facebook-sign icon-3x"></i>
                        </a>
                        <a className="" href="https://www.instagram.com/hafisalrijal/">
                            <i className="icon-instagram icon-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

App.propTypes = {
    location: PropTypes.any,
    history: PropTypes.any,
};

export default App;
