import React, { Component } from "react";
import { Animated } from "react-animated-css";

class Footer extends Component {
  render() {
    return (
      <section class="bg-light">
        <div class="container">
          <div class="row pt-4 pb-4">
            <div class="col-lg-12">
              <div class="float-left float_none mt-2 mb-2">
                <p class="copy-rights text-muted mb-0">2020 &copy; Jae Kim</p>
              </div>
              <div class="float-right float_none mt-2 mb-2">
                <ul class="list-inline fot_social mb-0">
                  <li class="list-inline-item"><a href="https://www.facebook.com/kjw9149"
                    class="social-icon text-muted"><i class="fa fa-facebook"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/jaeungkim0526/"
                    class="social-icon text-muted"><i class="fa fa-linkedin"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.instagram.com/jaekiim/"
                    class="social-icon text-muted"><i class="fa fa-instagram"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.github.com/jaeungkim/"
                    class="social-icon text-muted"><i class="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
