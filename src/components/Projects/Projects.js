import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import realestate from "../../Assets/Projects/realestate.png";
import cardeal from "../../Assets/Projects/cardeal.png";
import hr4tally from "../../Assets/Projects/hr4tally.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hr4tally}
              isBlog={false}
              title="HR4Tally.in"
              description="Hr4Tally.in is the HR Management Platform for Small and Medium Bussiness to manage their company HR which includes the daily attendance of employees based on geolocation, creating multiple companies, defining the pay heads, computing the salary based on attendance or flat rate and import the data into tally."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://staging.hr4tally.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cardeal}
              isBlog={false}
              title="CarDeal"
              description="CarDeal is a Django web application where users are able to view the car and schedule a test drive of the car and the admin manages all the user and add the new car to the platform."
              ghLink="https://github.com/parmarsachin611/car-dealership-django"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="Felicity Real Estate"
              description="Felicity Real Estate is a Django web application where users are able to view the flat, bungalow, and shop, & contact the assigned realtor of the flat. Admin manages all the users and adds the realtor and assigns them to flats, bungalows, and shops."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Realtor Clone"
              description="Realtor Clone is react js web application that used firebase as the backend for sign-in & sign-up authentication and stores the house in a collection. Users can upload and contact the landlord."
              ghLink="https://github.com/parmarsachin611/realtor-clone-react"
              demoLink="https://realtor-clone-v1.vercel.app/"
            />
          </Col>

          {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
