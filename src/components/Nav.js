import React from "react";
import { FaAlignJustify, FaFacebookF, FaInstagram, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = () => {
  const [state, setState] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__title">
              <b>
                <i>
                  <span className="Span">Ap</span>
                  <span className="Span" style={{ color: "silver" }}>
                    K
                  </span>
                </i>
              </b>
            </div>
          </ul>
          <ul className="ln">
            <Link className="btn nav-btn-outline" to="/portfolio"
            >
              Home
            </Link>
            <Link className="btn nav-btn-outline" to="/prices">
              Fitness
            </Link>
            <Link className="btn nav-btn-outline" to="/services">
              Skills
            </Link>
            <Link className="btn nav-btn-outline" to="/myservices">
              Services
            </Link>
          </ul>

          <ul className="navbar__icons">
            <li>
              <a href="https://www.linkedin.com/in/ashpak-mulani/">
                <FaLinkedinIn className="nav_ico" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ashpakmulanii/">
                <FaInstagram className="nav_ico" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ashpak.mulani.3994/">
                <FaFacebookF class="nav_ico" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/AshpakMulanii">
                <FaTwitter className="nav_ico" />
              </a>
            </li>
          </ul>

          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/portfolio" onClick={() => setState(!state)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setState(!state)}>Services</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setState(!state)}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => setState(!state)}>Tech Skills</Link>
              </li>
              <li>
                <Link to="/prices" onClick={() => setState(!state)}>Fitness </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setState(!state)}>Projects</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify style={{ fontSize: "0.8rem" }} />
      </div>
    </nav>
  );
};

export default Nav;
