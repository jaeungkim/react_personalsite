import React, { Component } from "react";
import { Form, Button, Container, Row } from 'react-bootstrap';
import axios from 'axios';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="custom_contact" id="contact">
        <Container>
          <div className="text-center mt-3">
            <h1> Contact Me</h1>
          </div>
          <Row>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xayprage"
              method="POST"
            >

              <label>Email:</label>
              <input type="email" name="email" />
              <label>Message:</label>
              <input type="text" name="message" />
              {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
          </Row>
        </Container>
      </section>
    );
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
}


export default ContactForm;
