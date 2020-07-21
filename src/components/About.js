import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <section className="custom_about" id="about">
        <Container>
          <div className="mb-3 text-center">
            <h1> About Me </h1>
          </div>
          <Row>
            <Col md>
              <div id="carouselExampleIndicators" className="mt-2 carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="../images/profile_1.jpeg" alt="First slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../images/profile_2.jpeg" alt="Second slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../images/profile_3.jpeg" alt="Third slide"></img>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../images/profile_4.jpeg" alt="Fourth slide"></img>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </Col>

            <Col md>
              <div>
                <p className="mt-2 about_explanation">
                  Hello, I am a dedicated software developer who recently graduated 
                  from the University of British Columbia with B.S in Computer Science. 
                  <br />From a very young age, I always loved playing with computers whether
                  it was just playing with pre-installed computer games like Pinball or just 
                  browsing through internets.
                  <br />Indeed, as I entered University and got a chance to learn more about 
                  computers and how they worked, I fell in love with coding. 
                  I had opportunities to develop in several areas but I found web developing the 
                  most entertaining as I was not only able to code but I was also able to design as well. 
                  Thus, during my 3rd and 4th year, I chose to focus mainly on web-dev projects and worked on several eCommerce websites.
                  <br />As for experiences, I have 2 non-tech internships at GlaxoSmithKline 
                  as a customer excellence team and AirBnB as a trust and safety team. 
                  From these experiences, I was able to gain knowledge of how companies 
                  communicate with their customers because I believe developers also need to 
                  know how to handle customer issues.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default About;
