import React, { Component } from "react";
import { Animated } from "react-animated-css";

class MainHeader extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg custom-nav fixed-top sticky">
          <a class="navbar-brand" href="#">Jae Kim</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="#home" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link">About</a>
              </li>
              <li class="nav-item">
                <a href="#work" class="nav-link">Projects</a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}
export default MainHeader;
