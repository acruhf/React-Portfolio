import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Linkedin from "../assets/Lin.png";
import Github from "../assets/ghub.png";


function Contact() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <div className= "container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h1>Contact</h1>
                  </div>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className= "col-lg-4 text-center">
                  <a href="https://www.linkedin.com/in/austin-ruhf/"><img src={Linkedin} alt="Linkedin"/>
                    <p>Linkedin</p>
                  </a>
                </div>
                <div className= "col-lg-4 text-center">
                    <a href="https://github.com/acruhf"><img src={Github} alt="Github"/>
                    <p>Github</p>
                    </a>
                </div>
                <div className= "col-lg-4 text-center">
                    <p>
                    Email: Austin.Ruhf@gmail.com
                    <br /><br /><br />
                    Phone: (434) 509-8337
                    <br /><br /><br />
                    <a href="assets/AustinRuhfResume_2021.pdf" download="newfilename">Resume</a>
                    </p>
                </div>
              </div>
            </div>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;