import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kaushik </span>
            from <span className="purple"> Assam, India.</span>
            <br />
            I am currently a Final Year Btech Undergrad at NIT Silchar.
            <br />

        
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football(Forever a Chelsea Fan)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

 

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
