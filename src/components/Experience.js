import React, { Component } from "react";
import { Button, Table, Modal, Container, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaNode, FaNpm, FaDatabase, FaPython, FaJava, FaPhp } from 'react-icons/fa';

class Project extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (

      <section className="custom_experience" id="work">
        <Container>
          <div className="text-center">
            <h1> Education & Skills </h1>
          </div>
          <Row>
            <Col md>
              <h3 className="experience_header"> Education </h3>
              <img className="mb-4 mt-4 w-75 mx-auto d-block" src="../images/ubc_logo3.png" alt=""></img>
              <div className="course_button">
                <Button variant="primary" onClick={this.handleShow}> Course History </Button>
              </div>
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                dialogClassName="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Course Lists</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th><u>Name</u></th>
                        <th><u>Code</u></th>
                        <th><u>Description</u></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b>Capstone Software Engineering Project</b></td>
                        <td>COSC 499</td>
                        <td>A capstone project requiring team software development for an actual client.
                          Students must produce a comprehensive report and deliver a formal presentation.</td>
                      </tr>
                      <tr>
                        <td><b>Agile Software Development</b></td>
                        <td>COSC 419L</td>
                        <td>Introduction to the Agile Software Development process.</td>
                      </tr>

                      <tr>
                        <td><b>Introduction to Networks</b></td>
                        <td>COSC 328</td>
                        <td>The five-layer Internet architecture using TCP/IP: application, transport, network, link, and physical. Topics include web protocols, network programming, routing, addressing, congestion control, error handling, Ethernet, wireless networks, security, multimedia transmission, and network management.</td>
                      </tr>

                      <tr>
                        <td><b>Web Programming</b></td>
                        <td>COSC 360</td>
                        <td>Design and implementation of web-based information systems and app development. Rich user interfaces, asynchronous updates, client-side and server-side scripting using standard technologies such as HTML, CSS, SVG, JavaScript, PHP. Data manipulation with SQL, JSON, XML. Modern scripting frameworks and libraries.</td>
                      </tr>

                      <tr>
                        <td><b>Human Computer Interaction</b></td>
                        <td>COSC 341</td>
                        <td>Examines the basic principles behind interaction design; how humans interact with computers, as well as the user-centered design cycle; user task analysis, task models, graphical interface design, prototyping, and evaluation</td>
                      </tr>

                      <tr>
                        <td><b>Software Engineering</b></td>
                        <td>COSC 310</td>
                        <td>Techniques to construct large systems using fundamental activities of specification, design, implementation, testing, and maintenance. Various life cycle models including the Unified Process. Exposure to software development tools, UML modeling techniques, good development practices, and project management.</td>
                      </tr>

                      <tr>
                        <td><b>Introduction to Data Analytics</b></td>
                        <td>COSC 301</td>
                        <td>Techniques for computation, analysis, and visualization of data using software. Manipulation of small and large data sets. Automation using scripting. Real-world applications from life sciences, physical sciences, economics, engineering, or psychology. No prior computing background is required.</td>
                      </tr>

                      <tr>
                        <td><b>Introduction to Databases</b></td>
                        <td>COSC 304</td>
                        <td>Databases from a user's perspective: querying with SQL, designing with UML, and using programs to analyze data. Construction of database-driven applications and websites and experience with current database technologies.</td>
                      </tr>
                      <tr>
                        <td><b>Introduction to Statistics</b></td>
                        <td>STAT 230</td>
                        <td>Applied statistics for students with a first-year calculus background. Estimation and testing of hypotheses, problem formulation, models and basic methods in analysis of variance, linear regression, and non-parametrics. Descriptive statistics and probability are presented as a basis for such procedures.</td>
                      </tr>
                      <tr>
                        <td><b>Data Structures and Algorithms</b></td>
                        <td>COSC 222</td>
                        <td>Introduction to the design, implementation and analysis of data structures. Topics will include lists, stacks, queues, trees, and graphs.</td>
                      </tr>
                      <tr>
                        <td><b>Introduction to Discrete Structures</b></td>
                        <td>COSC 221</td>
                        <td>Introduction to sets, logic, combinatorics, and graph theory, as applied in computing: sets and propositions, permutations and combinations, graphs and trees, Boolean algebra, algorithms, and applications.</td>
                      </tr>
                      <tr><td><b>Machine Architecture</b></td>
                        <td>COSC 211</td>
                        <td>Organization and design of computer systems and their impact on the practice of software development. Instruction set architecture and assembly programming languages, design of central processing units (CPU), memory hierarchy and cache organization, input and output programming.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}> Close </Button>
                </Modal.Footer>
              </Modal>

</Col>
<Col md>
              <h3 className="experience_header"> Skills </h3>

              <ul className="dev-icons">
                <p className="skill_description"> Front End</p>
                <li className="skill-inline-item"><FaHtml5 /><p className="skill-name">Html-5</p></li>
                <li className="skill-inline-item"><FaCss3 /><p className="skill-name">Css-3</p></li>
                <li className="skill-inline-item"><FaSass /><p className="skill-name">Sass</p></li>
                <li className="skill-inline-item"><FaJs /><p className="skill-name">JavaScript</p></li>
                <li className="skill-inline-item"><FaReact /><p className="skill-name">ReactJs</p></li>
              </ul>


              <ul className="dev-icons">
                <p className="skill_description"> Back End</p>
                <li className="skill-inline-item"><FaNode /><p className="skill-name">NodeJs</p> </li>
                <li className="skill-inline-item"><FaNpm /><p className="skill-name">Npm</p></li>
                <li className="skill-inline-item"><FaPython /><p className="skill-name">Python</p></li>
                <li className="skill-inline-item"><FaJava /><p className="skill-name">Java</p></li>
                <li className="skill-inline-item"><FaPhp /><p className="skill-name">PHP</p></li>
              </ul>


              <ul className="dev-icons">
                <p className="skill_description"> Databases</p>
                <li className="skill-inline-item"><FaDatabase /><p className="skill-name">SQL</p></li>
              </ul>



            </Col>

          </Row>
        </Container>
      </section>


    );
  }
}
export default Project;
