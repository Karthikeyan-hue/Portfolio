import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Karthikeyan V </span>
            from <span className="purple"> Madurai, India.</span>
            <br />
            I am currently studying in B.Tech(IT) 4th year from Sethu Institute of Technology. Academically I focused on Web Engineering and some Programming and my CGPA was 7.4 out of 10. 
            I believe my strong technical foundation. In my free time, I enjoy listening to music and watching movies.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "I never dreamed about success. I work for it!"{" "}
          </p>
          <footer className="blockquote-footer">Karthikeyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
