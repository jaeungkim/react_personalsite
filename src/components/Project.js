import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';


class Project extends Component {
  render() {

    return (

      <section className="custom_project" id="project">
        
        <Container>
        <h1>Projects</h1>
          <Row>
            <Col md>
              
              <div class="text-center rounded bg-white p-2">
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/sIZqCxLnLSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="content_blog pt-3 pb-3">
                  <div>
                    <h5 class="font-weight-bold mb-0"><a href="http://cosc499.ok.ubc.ca/19831149/deploy/src/frontPage.php" class="text-dark">Lental Website</a></h5>
                  </div>
                </div>
              </div>

            </Col>
            {/* <Col md>
              <div class="card mb-3 mt-3">
                <img src="..." class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Card with stretched link</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary stretched-link">Go somewhere</a>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>


    );
  }
}
export default Project;
