import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import weather from "../../Assets/Projects/weather.jpg"
import calmbridge from "../../Assets/Projects/CalmBridge.png"
import obess from "../../Assets/Projects/obessity.jpg"
import curr from "../../Assets/Projects/currency.jpg"
import blogverse from "../../Assets/Projects/Blogverse.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obess}
              isBlog={false}
              title="FitCheck"
              description="FitCheck is a decision tree-based machine learning model to predict weight levels based on BMI,location. It also included advising users on personalized calorie intake and creating a calorie calculator app using Google's Gemini Pro Vision model for food image analysis."
              ghLink="https://github.com/Shrey0207/fitcheck"
              demoLink="https://fitcheck-by8ufuiearsorfaawsnaxj.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogverse}
              isBlog={false}
              title="BlogVerse"
              description="BlogVerse is a dynamic platform dedicated to mental health, allowing users to explore a diverse range of blogs and articles. It ensures a seamless and engaging reading experience, fostering a supportive community around mental well-being."
              demoLink="https://blog-verse-rouge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calmbridge }
              isBlog={false}
              title="CalmBridge"
              description="CalmBridge is an innovative platform designed to promote mental wellness through engaging content and interactive resources. It offers a supportive space for users to connect, share experiences, and access valuable insights on mental health."
              ghLink="https://github.com/kaushikborah1706/CalmBridge"
              demoLink="https://calm-bridge.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={curr}
              isBlog={false}
              title="Currency2Currency"
              description="Curreny2Currency is a user-friendly tool that provides real-time exchange rate information, making it easy to convert between different currencies. It's designed to help users stay updated on global financial trends and make informed decisions while traveling or trading."
              ghLink="https://github.com/kaushikborah1706/Currency-Converter"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WeatherWise"
              description="Weather App is an intuitive tool that delivers accurate, up-to-date weather forecasts for any location. It provides detailed information on temperature, precipitation, and other weather conditions, helping users plan their day and stay prepared for any changes in the weather."
              ghLink="https://github.com/kaushikborah1706/WeatherApp"
              
            />
          </Col>



         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
