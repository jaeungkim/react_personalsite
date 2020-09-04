import React, { Component } from "react";
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';


class Project extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow(id) {
    this.setState({ show: id });
  }
  render() {

    return (

      <section className="custom_project" id="project">
        <Container>
          <div className="text-center mt-3">
            <h1> Projects </h1>
          </div>
          <Row>
            <Col md>
              <div className="text-center rounded ">
                <h5 className="font-weight-bold mb-0 font-italic">Lental.Inc</h5>
              </div>
              <Button variant="" onClick={() => this.handleShow('lental')}> <img className="w-50" src="../images/lental_pic.png" alt=""></img> </Button>
              <Modal
                show={this.state.show === 'lental'}
                onHide={this.handleClose}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                  <iframe title = "lental" width="100%" height="500" src="https://www.youtube.com/embed/sIZqCxLnLSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}> Close </Button>
                </Modal.Footer>
              </Modal>
            </Col>


            {/* <Col md>
              <div class="text-center rounded ">
                <h5 class="font-weight-bold mb-0">Base Town</h5>
              </div>
              <Button variant="" onClick={() => this.handleShow('base')}> <img className="d-block w-100" src="../images/base_town.png" alt=""></img> </Button>
              <Modal
                show={this.state.show === 'base'}
                onHide={this.handleClose}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>

                  <h5> Base Town Brief Description</h5>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}> Close </Button>
                </Modal.Footer>
              </Modal>
            </Col> */}
          </Row>
        </Container>
      </section>


    );
  }
}
export default Project;
