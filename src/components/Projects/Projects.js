import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import todo from "../../Assets/Projects/Todo-list.png";
import wikipedia from "../../Assets/Projects/Wikipedia.png";
import weather from "../../Assets/Projects/Weather.png";

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
              imgPath={blog}
              isBlog={false}
              title="Blog & Admin Dashboard"
              description="The Blog Website is a dynamic web application designed to allow users to create, read, update, and delete blog posts efficiently. This project demonstrates the integration of server-side scripting with PHP and a MySQL database for robust content management."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do List Application"
              description="The To-Do List Web Application is a user-friendly application designed to help users organize and track their daily tasks. Built entirely with JavaScript and leveraging the browser's local storage, this project demonstrates practical client-side development and data persistence techniques."
              ghLink="https://github.com/Karthikeyan-hue/TodoList-Application.git"
              demoLink="https://todolistapc.ccbp.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikipedia}
              isBlog={false}
              title="Wikipedia Search Engine"
              description="The Wikipedia Search Web Application is an interactive web application that allows users to search for information directly from Wikipedia’s API. Built with JavaScript, this project demonstrates proficiency in consuming RESTful APIs, managing asynchronous data, and implementing local storage for enhanced functionality."
              ghLink="https://github.com/Karthikeyan-hue/Wkipedia-Search-Application.git"
              demoLink="https://wikipedia004.ccbp.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="The Weather Web Application is a sleek and interactive web application designed to provide real-time weather updates for locations around the globe. Built using React.js, this project showcases expertise in modern front-end development, API integration, and creating dynamic user interfaces."
              ghLink="https://github.com/Karthikeyan-hue/Weather-App.git"
              demoLink="https://weather-app-kappa-ivory-24.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
