import { React, useState } from 'react'
import './index.scss'

function Header() {
  const navs = ["Services", "Work", "Resume", "Skills", "Testimonials", "Contact"];
  const [navTab, setNavTab] = useState('Services');

  return (
    <header>
        <div className="header-parent">
            <div className="header-container flex flex-wrap justify-between items-center">
                <div className="logo">
                    <h2><span>A</span>shish Soni</h2>
                </div>
                <nav>
                  <ul className="list-unstyled p-0 m-0 flex flex-wrap items-center gap-5">
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#services">Service</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#work">Work</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#resume">Resume</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#testimonial">Testimonials</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#contact">Contact</a></li>
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white hire-me" href="">Hire Me</a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header