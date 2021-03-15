import React, { Component } from "react";
import Coursemodal from "./Coursemodal";

class Experience extends Component {
  render() {
    return (
      <div className="grey_background">
        <section className="custom_section" id="work">
          <div className="text-center">
            <h1 className="title">Education & Experience</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <p className="subtitle">Education</p>
                <img
                  className="mb-4 w-75 mx-auto d-block"
                  src="../images/ubc_logo3.png"
                  alt=""
                ></img>
                  <Coursemodal />  
              </div>
              <div className="col-md-6 col-12">
                <p className="subtitle">Experience</p>
                
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}
export default Experience;
