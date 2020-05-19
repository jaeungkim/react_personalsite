import React, { Component } from "react";
import Particles from 'react-particles-js';
import Typical from 'react-typical';

class Profile extends Component {
  render() {
    return (

      <section class="custom-profile">
        <div class="bg-overlay">
          <Particles canvasClassName="example"
            params={{
              "particles": {
                "number": {
                  "value": 100
                },
                "size": {
                  "value": 5
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                }
              }
            }} />
          <div class="home-table">
            <div class="home-table-center">
              <div class="container">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="social_bar">
          <ul class="social_home">
            <li class="list-inline-item"><a href="https://www.facebook.com/kjw9149"><i
              class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/jaeungkim0526"><i
              class="fa fa-linkedin"></i></a></li>
            <li class="list-inline-item"><a href="https://www.instagram.com/jaekiim/"><i
              class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="https://github.com/jaeungkim/"><i
              class="fa fa-github"></i></a></li>
          </ul>
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
