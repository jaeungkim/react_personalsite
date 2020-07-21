import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Project extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {

    return (

      <section className="custom_experience" id="work">

        <Container>
          <div className="text-center">
            <h1> Education & Skills </h1>

          </div>
          <Row>

            <Col md>
              <p>
                COURSE HISTORY
              </p>
              <img className="mb-3 mt-3 w-100" src="../images/ubc_logo3.png" alt=""></img>
            </Col>

            <Col md>
              <p> Skills</p>
            </Col>

          </Row>
        </Container>
      </section>


    );
  }
}
export default Project;
