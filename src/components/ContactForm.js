import React, { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }


  render() {
    const { status } = this.state;
    return (
      <section className="custom_contact" id="contact">
        <Container>
          <div className="text-center mt-3">
            <h1> Contact Me</h1>
          </div>
          <Row className="justify-content-center">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xayprage"
              method="POST"
            >
              <Row>
                <Col lg>
                  <div className="form-group mt-2">
                    <label for="name" className="font-weight-bold"> Name </label>
                    <input name="name" id="name" type="text" className="form-control" placeholder="Your name..." />
                  </div>
                </Col>

                <Col lg>
                  <div className="form-group mt-2">
                    <label for="email" className="font-weight-bold"> Email address </label>
                    <input name="email" id="email" type="email" className="form-control" placeholder="Your email..." />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg>
                  <div className="form-group mt-2">
                    <label for="comments" className="font-weight-bold"> Message </label>
                    <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your message..."></textarea>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg className="text-right">
                  {status === "SUCCESS" && <p>Email has been sent! We will contact you shortly. Thank You.</p>}
                  {status === "ERROR" && <p> Ooops! There was an error.</p>}
                  <input type="submit" id="submit" name="send" className="btn btn-custom" value="Send Message"></input>

                </Col>
              </Row>
            </form>
          </Row>
        </Container>
      </section>
    );
  }
}


export default ContactForm;
