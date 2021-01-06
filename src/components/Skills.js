import React, { Component } from "react";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
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
import mysqlIcon from '@iconify/icons-logos/mysql';

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
              <Container>
                <img className="ill_image" src="../images/profile_illustration.png" alt=""></img>
              </Container>
            </Col>
            <Col md>
              <Container>
                <Tabs className="mt-2 mb-2 myClass justify-content-center text-center" defaultActiveKey="frontend">
                  <Tab eventKey="frontend" title="Front-End">
                    <div className="dev-icons">
                      <h4 className="skill-name">Html-5 <Icon icon={html5} /></h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Css-3 <Icon icon={fileTypeCss} /></h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Sass <Icon icon={sassIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">JavaScript <Icon icon={javascriptIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">ReactJs <Icon icon={fileTypeReactts} /></h4>
                      <ProgressBar striped variant="info" animated now={60} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Redux <Icon icon={reduxIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={40} />
                    </div>
                  </Tab>

                  <Tab eventKey="backend" title="Back-End">
                    <div className="dev-icons">
                      <h4 className="skill-name">NodeJs <Icon icon={nodejsIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={40} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Npm <Icon icon={npmIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={50} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Python <Icon icon={pythonIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">Java <Icon icon={javaIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">PHP <Icon icon={phpIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                  </Tab>

                  <Tab eventKey="database" title="Database">
                    <div className="dev-icons">
                      <h4 className="skill-name">MySQL <Icon icon={mysqlIcon} /></h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                  </Tab>
                </Tabs>

              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}