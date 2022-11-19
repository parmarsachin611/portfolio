import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm <span className="purple">Sachin Parmar</span> from <span className="purple"> Mumbai, India.</span> I am pursuing B.E. in Electronics and Computer Science. 
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />

              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}> 
                  My Education!!!
                </p>

                <table>
                  <thead>
                    <tr>
                      <th><AiFillThunderbolt />  </th>
                      <th>
                      <label>
                      2023 | CGPA: 8.75 <br />
                      <span style={{backgroundColor: "#700c86", padding: "5px 5px", borderRadius: "5px"}}>Fr Conceicao Rodrigues College of Engineering</span> <br />
                      BE in Electronics & Computer Science 
                      </label>
                      </th>
                    </tr>
                    <tr></tr>
                    <tr>
                    <th><AiFillThunderbolt />  </th>
                      <th>
                      <label>
                      2020 | Percentage: 89%  <br />
                      <span style={{backgroundColor: "#700c86", padding: "5px 5px", borderRadius: "5px"}}>Thakur Polytechnic</span> <br />
                      Diploma in IT 
                      </label>
                      </th>
                    </tr>
                  </thead>
                </table>
              </blockquote>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/parmarsachin611"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/sachinparmar611"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sachin-parmar-636721186/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_sachinparmar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
