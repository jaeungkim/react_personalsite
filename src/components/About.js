import React, { Component } from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';

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
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/profile_1.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/profile_2.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/profile_3.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../images/profile_4.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>

            <Col md>
              <div>
                <p className="mt-2 about_explanation">
                  I am a dedicated software developer who recently graduated
                  from the University of British Columbia with B.Sc in Computer Science.
                  <br /><br />When I was young, I loved playing with computers whether
                  it was just playing with pre-installed computer games like Pinball or just
                  browsing through internets. As I entered University and got a chance to learn more about
                  computers, I absolutely fell in love with software engineering.
                  I had opportunities to develop in several areas but I found web developing the
                  most entertaining as I was not only able to code but I was also able to design as well.
                  Thus, during my 3rd and 4th year, I chose to focus mainly on web-dev projects and worked on several eCommerce websites.
                  <br /><br />As for experiences, I have 2 non-tech internships at GlaxoSmithKline
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
