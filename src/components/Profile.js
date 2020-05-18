import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Typical from 'react-typical';

class Profile extends Component {
  // const AnimatedTypingComponent = () => (
  //   <Typing>
  //     <span>This span will get typed.</span>
  //   </Typing>
  // );
  render() {
    return (
      <section class="sectoin custom-profile">
        <div class="bg-overlay">
          <div class="home-table">
            <div class="home-table-center">
              <div class="container position-relative">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="text-white text-center">
                      <h1 class="header_title mb-0 mt-3"> I am{' '}
                        <Typical
                          loop={Infinity}
                          wrapper='b'
                          steps={[
                            'Jae Kim.', 4000,
                            'a Developer.', 4000,
                            'a Designer.', 4000,
                            'a Blogger.', 4000
                          ]}
                        />
                      </h1>
                      <ul class="social_home list-unstyled text-center pt-4">
                        <li class="list-inline-item"><a href="https://www.facebook.com/kjw9149"><i
                          class="fa fa-facebook"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.linkedin.com/in/jaeungkim0526"><i
                          class="fa fa-linkedin"></i></a></li>
                        <li class="list-inline-item"><a href="https://www.instagram.com/jaekiim/"><i
                          class="fa fa-instagram"></i></a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll_down">
          <a href="#about" class="scroll">
            <i class="fa fa-arrow-down text-white"></i>
          </a>
        </div>
      </section>
    );
  }
}
export default Profile;
