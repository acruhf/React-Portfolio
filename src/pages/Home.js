import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";
import Austin from "../assets/home_page.jpg"

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <Row>
              <div className="col-sm-12 col-lg-6">
                  <img src={Austin} className="img-fluid self" alt="Austin"/>
              </div>
              <div className="col-sm-12 col-lg-6">
                  <p> 
                  Virginia born and raised, I've been a lifeguard, landscaper, paddleboat merchant, prep cook, and hazardous waste technician. I've been playing music my whole life as a cellist, guitarist, bassist, and drummer. Right now I'm building and decorating cakes at local Richmond bakery Shyndigz and I'm learning web development to launch a new career. Programming is new to me but I love to solve problems and create new things.
                  </p>
              </div>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;