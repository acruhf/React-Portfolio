import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Section from "../components/Section";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Section>
            <div className="container">
              <div className= "row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h2>Walkies</h2>
                  </div>
                </div>
                <div className= "col-md-6">
                  <br />
                  <img src="assets/walkiesshot.png" alt="Walkies" className="portfolio"/>
                </div>
                <div className= "col-md-6">
                  <br />
                  <p>My second group project harnessing the power of MySQL and Sequelize to give you a local dog-walking app.
                    <br />
                    Deployed Page: 
                    <a href="https://sheltered-eyrie-89748.herokuapp.com/">https://sheltered-eyrie-89748.herokuapp.com/</a> 
                    <br />
                    Github:
                    <a href="https://github.com/awiehrs/walkies-test">https://github.com/awiehrs/walkies-test</a>
                  </p>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className="col-md-12">
                  <div className="page-header">
                  <h2>Birthday Bot</h2>
                  </div>
                </div>
                <div className= "col-md-6">
                <br />
                 <img src="assets/birthdayShot.png" alt="Birthday Bot" className="portfolio"/>
                </div>
                <div className= "col-md-6">
                  <br />
                  <p>My first group project harnessing the power of APIs to give you a personalized list of celebrity birthdays.
                    <br  />
                    Deployed Page: 
                    <a href="https://wtrickser.github.io/birthdayBot/">https://wtrickser.github.io/birthdayBot/</a> 
                    <br />
                    Github:
                    <a href="https://github.com/Wtrickser/birthdayBot">https://github.com/Wtrickser/birthdayBot</a>
                  </p>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h2>Eat-Da-Burger</h2>
                  </div>
                </div>
                <div className= "col-md-6">
                  <br />
                  <img src="assets/eatdaburger.png" alt="Eat-Da-Burger" className="portfolio"/>
                </div>
                <div className= "col-md-6">
                  <br />
                  <p>A Burger-Eating app made using Node, Express, and MySQL 
                    <br />
                    Deployed Page: 
                    <a href="https://acruhf-burger-logger.herokuapp.com/">https://acruhf-burger-logger.herokuapp.com/</a> 
                    <br />
                    Github:
                    <a href="https://github.com/acruhf/burger-logger">https://github.com/acruhf/burger-logger</a>
                  </p>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h2>Work Day Scheduler</h2>
                  </div>
                </div>
                <div className= "col-md-6">
                  <br />
                  <img src="assets/Work_Day_Scheduler.gif" alt="Work Day Scheduler" className="portfolio"/>
                </div>
                <div className= "col-md-6">
                  <br />
                  <p>For this assignment I made a workday hourly task list with a dynamically generated display with the ability to save list items in local storage.
                    <br />
                    Deployed Page: 
                    <a href="https://acruhf.github.io/Work-Day-Planner/">https://acruhf.github.io/Work-Day-Planner/</a> 
                    <br />
                    Github:
                    <a href="https://github.com/acruhf/Work-Day-Planner">https://github.com/acruhf/Work-Day-Planner</a>
                  </p>
                </div>
              </div>
              <br />
              <div className= "row">
                <div className="col-md-12">
                  <div className="page-header">
                    <h2>Timed Quiz</h2>
                  </div>
                </div>
                <div className= "col-md-6">
                <br />
                <img src="assets/EGQ.gif" alt="Timed-Quiz" className="portfolio"/>
              </div>
              <div className="col-md-6">
                <br />
                <p>A timed multiple-choice quiz on the topic of Electric Guitars. This assignment was a test of applying various javascript concepts together including a timer, scoring system, and a leaderboard for saving scores into local storage
                  <br />
                  Deployed Page: 
                  <a href="https://acruhf.github.io/Timed-Quiz/">https://acruhf.github.io/Timed-Quiz/</a> 
                  <br />
                  Github:
                  <a href="https://github.com/acruhf/Timed-Quiz">https://github.com/acruhf/Timed-Quiz</a>
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

export default Portfolio;