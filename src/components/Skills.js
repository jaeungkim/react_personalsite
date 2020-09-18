import React, {Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaNode, FaNpm, FaDatabase, FaPython, FaJava, FaPhp } from 'react-icons/fa';

export default class Skills extends Component {
  render() {
    return (
      <section className="custom_white" id="skill">
        <div className="text-center">
          <h1> Skills </h1>
        </div>
        <Container>
          <Row>
            <Col md className="mt-4">

                  <ul className="dev-icons">
                    <p className="skill_description"> Front End</p>
                    <a className="img-zoom"><li className="skill-inline-item "><FaHtml5 /><p className="skill-name">Html-5</p></li></a>
                    <a className="img-zoom"><li className="skill-inline-item "><FaCss3 /><p className="skill-name">Css-3</p></li></a>
                    <a className="img-zoom"><li className="skill-inline-item "><FaSass /><p className="skill-name">Sass</p></li></a>
                    <a className="img-zoom"><li className="skill-inline-item "><FaJs /><p className="skill-name">JavaScript</p></li></a>
                    <a className="img-zoom"><li className="skill-inline-item "><FaReact /><p className="skill-name">ReactJs</p></li></a>
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

            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}