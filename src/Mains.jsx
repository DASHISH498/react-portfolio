import React from "react";
import Tabings from "./Tabings";
import profileImage from './assets/profile.jpg';
import Projectcards from "./subcomponent/Projectcards";
import Experience from "./subcomponent/Experience";
import Services from "./subcomponent/Services";
import Skills from "./subcomponent/Skills";

function Mains() {
  return (
    <>
        <section className="mains-section overflow-hidden">
            <div className="intro-text">
                <svg viewBox="0 0 1320 300" class="overflow-hidden"><text x="50%" y="50%" text-anchor="middle" class="animate-stroke">HI</text></svg>
            </div>
            <div className="container">
                <div className="column-group">
                    <div>
                        <h4 className="fw-bold mb-2">I am Ashish</h4>
                        <h1>Next-Level Web Developer.</h1>
                        <p className="max-w-400px">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        <div className="mt-5 flex align-item-center gap-4">
                            <div>
                                <a href="/Ashish - Front End Developer.pdf" download="Ashish - Front End Developer.pdf" className="download flex items-center text-decoration-none" >Download CV <i className="ms-2 fa fa-download"></i></a>
                            </div>
                            <div className="flex">
                                <ul className="flex items-center gap-3 list-unstyled p-0 m-0">
                                    <li className="overflow-hidden"><i className="fa fa-twitter"></i></li>
                                    <li className="overflow-hidden"><i className="fa fa-linkedin"></i></li>
                                    <li className="overflow-hidden"><i className="fa fa-instagram"></i></li>
                                    <li className="overflow-hidden"><i className="fa fa-github"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="image-container">
                            {/* <img src="/img/profile.jpg" alt="" /> */}
                            <img src={profileImage} alt={"profile"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="funfact-area mt-5 mb-5">
                <div className="container">
                    <ul className="list-unstyled flex flex-wrap justify-between gap-3">
                        <li className="flex flex-wrap items-center">
                            <span className="d-block text-6xl">6.5</span>
                            <h5 className="font-light max-w-40 ms-3">Year of Experience</h5>
                        </li>
                        <li className="flex flex-wrap items-center">
                            <span className="d-block text-6xl">6</span>
                            <h5 className="font-light max-w-40 ms-3">Project Completed</h5>
                        </li>
                        <li className="flex flex-wrap items-center">
                            <span className="d-block text-6xl">400+</span>
                            <h5 className="font-light max-w-40 ms-3">Happy Client</h5>
                        </li>
                        <li className="flex flex-wrap items-center">
                            <span className="d-block text-6xl">4.8</span>
                            <h5 className="font-light max-w-40 ms-3">Rating</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="service">
            <div className="container">
                <div className="section-padding">
                    <div className="heading text-center flex flex-col items-center">
                        <h2 className="text-transparent text-5xl font-bold leading-tight">My Quality Service</h2>
                        <p className="m-0 max-w-700px">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                    </div>
                    <Services />
                </div>
            </div>
        </section>
        <section id="portfolio">
            <div className="container">
                <div className="section-padding">
                    <div className="heading text-center flex flex-col items-center">
                        <h2 className="animate__animated animate__bounce text-transparent text-5xl font-bold leading-tight">My Recent Works</h2>
                        <p className="m-0 max-w-700px">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                    </div>
                    {/* <Tabings /> */}
                    <div className="project-cards">
                        <Projectcards />
                    </div>
                </div>
            </div>
        </section>
        <section id="experience">
            <div className="container">
                <div className="section-padding">
                    <div className="heading text-center flex flex-col items-center">
                        <h2 className="text-transparent text-5xl font-bold leading-tight">My Experience</h2>
                        <p className="m-0 max-w-700px">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                    </div>
                    <Experience />
                </div>
            </div>
        </section>
        <section id="skills">
            <div className="container">
                <div className="section-padding">
                    <div className="heading text-center flex flex-col items-center">
                        <h2 className="animate__animated animate__bounce text-transparent text-5xl font-bold leading-tight">My Skills</h2>
                        <p className="m-0 max-w-700px">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                    </div>
                    <Skills />
                </div>
            </div>
        </section>
    </>
  )
}

export default Mains