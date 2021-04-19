import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <div className="col-sm-12 col-lg-6">
                <img src="assets/home_page.jpg" className="img-fluid self" alt="Austin"/>
            </div>
            <div className="col-sm-12 col-lg-6">
                <p> 
                Virginia born and raised, I've been a lifeguard, landscaper, paddleboat merchant, prep cook, and hazardous waste technician. I've been in a dozen or so bands as a guitarist, bassist, drummer, and/or singer, including my current self-led 4-piece called Ulmeyda. Right now I'm building and decorating cakes at local Richmond bakery Shyndigz and I'm learning web development to launch a new career while stuck in quarantine. Programming is new to me but I love to solve problems and create new things.
                </p>
            </div> 
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;