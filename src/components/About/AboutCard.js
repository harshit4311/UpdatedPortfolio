import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! <span className="purple">Harshit Shah </span>
            from <span className="purple"> Mumbai, IN.</span>
            <br />
            I'm a freshman @ BITS Pilani & Scaler School of Technology
            <br />
            I'm currently working on my Capstone Project @ <span className="purple">The University of Oxford </span>
            <br />
            <br />
            My <span className="purple">hobbies</span> other than coding/solving problems:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A lot can happen over coffee!"{" "}
          </p>
          <footer className="blockquote-footer">Café Coffee Day</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
