import { React } from 'react'
import './index.scss'

function Header() {
  return (
    <header>
        <div className="header-parent">
            <div className="header-container d-flex flex-wrap align-items-center justify-content-between">
                <div className="logo">
                    <h2><span>A</span>shish Soni</h2>
                </div>
                <nav>
                  <ul className="list-unstyled p-0 m-0 d-flex align-items-center gap-5">
                    <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#services">Services</a></li>
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