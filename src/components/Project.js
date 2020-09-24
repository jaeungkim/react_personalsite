import React, { Component } from "react";
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';


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

      <section className="custom_grey" id="project">
        <div className="text-center">
          <h1> Projects </h1>
        </div>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm>
              <div className="github_card">
                <a href="https://github.com/jaeungkim/Portfolio"><img className='overflow-hidden mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Portfolio.png" /></a>
              </div>

              <div className="github_card">
                <a href="https://github.com/jaeungkim/Resume"><img className='mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Resume.png" /></a>
              </div>

              <div className="github_card">
                <a href="https://github.com/jaeungkim/CaffeineHolic"><img className='mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/CaffeineHolic.png" /></a>
              </div>
            </Col>
            <Col sm>

              <div className="github_card">
                <a href="https://github.com/jaeungkim/Lental"><img className='mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Lental.png" /></a>
              </div>

              <div className="github_card">
                <a href="https://github.com/jaeungkim/ChatBot"><img className='mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/ChatBot.png" /></a>
              </div>

              <div className="github_card">
                <a href="https://github.com/jaeungkim/COSC419"><img className='mb-2 mt-2 img-fluid rounded' src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/COS2C419.png" /></a>
              </div>
            </Col>

          </Row>




          {/* <Card className="card_custom">
                <Card.Header>Lental.Inc</Card.Header>
                <a><Card.Img src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/React_Portfolio.png" width="460px" alt="" /></a>
                <Card.Body>
                  <Button variant="primary" onClick={() => this.handleShow('lental')}> Details</Button>
                  <Modal
                    size="lg"
                    show={this.state.show === 'lental'}
                    onHide={this.handleClose}
                    dialogClassName="custom-modal"
                  >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                      <iframe title="lental" width="100%" height="500" src="https://www.youtube.com/embed/sIZqCxLnLSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}> Close </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Card> */}


        </Container>
      </section>


    );
  }
}
export default Project;
