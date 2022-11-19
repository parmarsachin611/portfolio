import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My interests include developing the mobile and web development.
            I am looking forward to new opportunities and challenges.
            <br />
            <br />
            My Work Experience!!!
          </p>
          <label className="about-activity">
          <span style={{marginBottom: "5px"}}>
          <ImPointRight />  <span style={{ backgroundColor: "#700c86", padding: "5px 5px", borderRadius: "5px" }}>Atom Group</span> - Full Stack Developer from June 2022-Present
          </span>
          <br />
            <span>
            <ImPointRight /> <span style={{ backgroundColor: "#700c86", padding: "5px 5px", borderRadius: "5px" }}>AY International</span> - Web Developer from Aug 2021-Nov 2021
            </span>
          </label>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
