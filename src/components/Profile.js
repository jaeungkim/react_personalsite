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
                  "value": 500,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 0.2,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 85,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }
            } />
          <div class="home-table">
            <div class="home-table-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="text-white text-center">
                      <h1 class="display-4">I am </h1>
                      <h1 class="header_title">
                        <Typical
                          loop={Infinity}
                          wrapper='b'
                          steps={[
                            'Jae Kim.', 4000,
                            'Developer.', 4000,
                            'Designer.', 4000,
                            'Blogger.', 4000
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
