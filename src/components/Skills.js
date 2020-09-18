import React, { Component } from "react";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, Faredux, FaNode, FaNpm, FaDatabase, FaPython, FaJava, FaPhp } from 'react-icons/fa';
import { Icon, InlineIcon } from '@iconify/react';
import javascriptIcon from '@iconify/icons-logos/javascript';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import reduxIcon from '@iconify/icons-logos/redux';
import html5 from '@iconify/icons-logos/html-5';
import sassIcon from '@iconify/icons-logos/sass';
import fileTypeReactts from '@iconify/icons-vscode-icons/file-type-reactts';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import npmIcon from '@iconify/icons-logos/npm';
import pythonIcon from '@iconify/icons-logos/python';
import javaIcon from '@iconify/icons-logos/java';
import phpIcon from '@iconify/icons-logos/php';
import fileTYpeSql from '@iconify/icons-vscode-icons/file-type-sql';

export default class Skills extends Component {

  render() {
    return (
      <section className="custom_white" id="skill">
        <div className="text-center">
          <h1> What I Do </h1>
        </div>
        <Container>
          <Row>
            <Col md>
              <Tabs className="justify-content-center text-center" defaultActiveKey="all">
                <Tab eventKey="all" title="All">
                  <Row>
                    <Col md>
                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={html5} /> Html-5</h4>
                        <ProgressBar striped variant="info" animated now={90} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={fileTypeCss} />  Css-3</h4>
                        <ProgressBar striped variant="info" animated now={90} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={sassIcon} /> Sass</h4>
                        <ProgressBar striped variant="info" animated now={80} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={javascriptIcon} /> JavaScript</h4>
                        <ProgressBar striped variant="info" animated now={90} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={fileTypeReactts} /> ReactJs</h4>
                        <ProgressBar striped variant="info" animated now={60} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={reduxIcon} /> Redux </h4>
                        <ProgressBar striped variant="info" animated now={40} />
                      </div>

                    </Col>
                    <Col md>
                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={nodejsIcon} /> NodeJs</h4>
                        <ProgressBar striped variant="info" animated now={40} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={npmIcon} /> Npm</h4>
                        <ProgressBar striped variant="info" animated now={50} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={pythonIcon} /> Python</h4>
                        <ProgressBar striped variant="info" animated now={80} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={javaIcon} /> Java</h4>
                        <ProgressBar striped variant="info" animated now={90} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={phpIcon} /> PHP</h4>
                        <ProgressBar striped variant="info" animated now={80} />
                      </div>

                      <div className="dev-icons">
                        <h4 className="skill-name"><Icon icon={fileTYpeSql} /> SQL</h4>
                        <ProgressBar striped variant="info" animated now={70} />
                      </div>
                    </Col>
                  </Row>
                </Tab>


                <Tab eventKey="frontend" title="Front-End">
                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={html5} /> Html-5</h4>
                    <ProgressBar striped variant="info" animated now={90} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={fileTypeCss} />  Css-3</h4>
                    <ProgressBar striped variant="info" animated now={90} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={sassIcon} /> Sass</h4>
                    <ProgressBar striped variant="info" animated now={80} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={javascriptIcon} /> JavaScript</h4>
                    <ProgressBar striped variant="info" animated now={90} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={fileTypeReactts} /> ReactJs</h4>
                    <ProgressBar striped variant="info" animated now={60} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={reduxIcon} /> Redux </h4>
                    <ProgressBar striped variant="info" animated now={40} />
                  </div>
                </Tab>

                <Tab eventKey="backend" title="Back-End">
                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={nodejsIcon} /> NodeJs</h4>
                    <ProgressBar striped variant="info" animated now={40} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={npmIcon} /> Npm</h4>
                    <ProgressBar striped variant="info" animated now={50} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={pythonIcon} /> Python</h4>
                    <ProgressBar striped variant="info" animated now={80} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={javaIcon} /> Java</h4>
                    <ProgressBar striped variant="info" animated now={90} />
                  </div>

                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={phpIcon} /> PHP</h4>
                    <ProgressBar striped variant="info" animated now={80} />
                  </div>
                </Tab>

                <Tab eventKey="database" title="Database">
                  <div className="dev-icons">
                    <h4 className="skill-name"><Icon icon={fileTYpeSql} /> SQL</h4>
                    <ProgressBar striped variant="info" animated now={70} />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}