import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prerak Patel </span>
            from <span className="purple"> Calgary Canada</span>
            <br /> I am a <span className="purple">CX Specialist</span> at{" "}
            <span className="purple"> Neo Financial </span>
            <br />
            Additionally, I am a{" "}
            <span className="purple"> Software Developer</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Finance and Money
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Science and Knowledge videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Philosophy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Simplicity is the key to success"{" "}
          </p>
          <footer className="blockquote-footer">Patel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
