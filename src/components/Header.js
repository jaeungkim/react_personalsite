import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";


class MainHeader extends Component {
  render(

  ) {
    return (
      <nav className="navbar navbar-expand-lg custom-nav fixed-top">
        <Link
          // activeClass="active"
          className="navbar-brand"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ cursor: "pointer" }}
          onClick={scroll.scrollToTop}       
        > Jae Kim </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                className="active nav-link"
                onClick={scroll.scrollToTop}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              > Home </Link>
            </li>
            <li className="nav-item">
              <Link
                className="active nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              > About </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="active nav-link"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              > Blog </Link>
            </li> */}
            <li className="nav-item">
              <Link
                className="active nav-link"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              > Projects </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="active nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ cursor: "pointer" }}
              > Contact </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
export default MainHeader;
