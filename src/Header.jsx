import { React, useState, useEffect } from 'react';
import './index.scss';
import './Header.scss';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // ⛔ Prevent background scroll when menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [navOpen]);

  return (
    <header>
      <div className="header-parent">
        <div className="header-container flex flex-wrap justify-between items-center">
          <div className="logo">
            <h2><span>A</span><span className="hide-768">shish Soni</span></h2>
          </div>

          <div className="hamburger d-md-none" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? '×' : '☰'}
          </div>

          {/* Navigation */}
          <nav className={navOpen ? 'open-nav' : ''}>
            <ul className={`nav-menu list-unstyled p-0 m-0 flex flex-wrap items-center gap-5 ${navOpen ? 'nav-menu-open' : ''}`}>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#services" onClick={() => setNavOpen(false)}>Service</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#work" onClick={() => setNavOpen(false)}>Work</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#resume" onClick={() => setNavOpen(false)}>Resume</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#skills" onClick={() => setNavOpen(false)}>Skills</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#testimonial" onClick={() => setNavOpen(false)}>Testimonials</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white" href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
              <li className="nav-item"><a className="text-decoration-none fw-semibold text-white hire-me" href="" onClick={() => setNavOpen(false)}>Hire Me</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
