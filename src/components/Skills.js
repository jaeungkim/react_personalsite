import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaNode, FaNpm, FaDatabase, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { Helmet } from "react-helmet";

export default class Skills extends Component {
  render() {
    return (
      <section className="custom_white" id="skill">
        <div className="text-center">
          <h1> Skills </h1>
        </div>
        <Container>
          <Row>
            <Helmet>
              <script src="js/custom.js"></script>
              <script src="js/isotope.js"></script>
            </Helmet>
            <Col md className="mt-4">
              <ul className="text-center list-inline mb-0 work_menu" id="menu-filter">
                <li className="list-inline-item"><a class="active" data-filter="*">All</a></li>
                <li className="list-inline-item"><a class="" data-filter=".frontEnd">Front-End</a></li>
                <li className="list-inline-item"><a class="" data-filter=".backEnd">Back-End</a></li>
                <li className="list-inline-item"><a class="" data-filter=".database">Database</a></li>
              </ul>
              <div className="mt-5 work-filter">
                <ul className="dev-icons">
                  <p className="skill_description"> Front End</p>
                  <li className="skill-inline-item frontEnd"><FaHtml5 /><p className="skill-name">Html-5</p></li>
                  <li className="skill-inline-item frontEnd"><FaCss3 /><p className="skill-name">Css-3</p></li>
                  <li className="skill-inline-item frontEnd"><FaSass /><p className="skill-name">Sass</p></li>
                  <li className="skill-inline-item frontEnd"><FaJs /><p className="skill-name">JavaScript</p></li>
                  <li className="skill-inline-item frontEnd"><FaReact /><p className="skill-name">ReactJs</p></li>
                </ul>
                <ul className="dev-icons">
                  <p className="skill_description"> Back End</p>
                  <li className="skill-inline-item backEnd"><FaNode /><p className="skill-name">NodeJs</p> </li>
                  <li className="skill-inline-item backEnd"><FaNpm /><p className="skill-name">Npm</p></li>
                  <li className="skill-inline-item backEnd"><FaPython /><p className="skill-name">Python</p></li>
                  <li className="skill-inline-item backEnd"><FaJava /><p className="skill-name">Java</p></li>
                  <li className="skill-inline-item backEnd"><FaPhp /><p className="skill-name">PHP</p></li>
                </ul>
                <ul className="dev-icons">
                  <p className="skill_description"> Databases</p>
                  <li className="skill-inline-item database"><FaDatabase /><p className="skill-name">SQL</p></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}