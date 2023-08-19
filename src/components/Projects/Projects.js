import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tarneeb from "../../Assets/Projects/tarneeb.png";
import expensetracker from "../../Assets/Projects/expensetracker.png";
import buber from "../../Assets/Projects/buber.png";
import mern from "../../Assets/Projects/mern.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import dbas from "../../Assets/Projects/dbas.png";
import blog from "../../Assets/Projects/blog.png";

import hackernews from "../../Assets/Projects/hackernews.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Wiscord"
              description="Wiscord revolutionizes personal server rooms with integrated end-to-end messaging. Elevate communication and collaboration within Chatify, inspired by Soumyajit's vision. Seamlessly connect, share, and create together ."
              ghLink="https://github.com/prerakkumarpatel/wiscord-app"
              demoLink="https://wiscord-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackernews}
              isBlog={false}
              title="Hacker News GraphQL"
              description="Crafted Hacker News GraphQL using React and GraphQL for API . Enhanced data retrieval and interactive user experience, providing streamlined access to trending tech stories and discussions from Hacker News.Allowing users to vote , add , edit, remove any stories"
              ghLink="https://github.com/prerakkumarpatel/hackernews-react-apolloGraphQL"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mern}
              isBlog={false}
              title=" Old Portfolio MERN with "
              description="Developed a dynamic portfolio using the MERN stack. Seamlessly showcases projects and skills. Implemented a contact form for streamlined communication, managing user inquiries effectively and enhancing engagement."
              ghLink="https://github.com/prerakkumarpatel/webd6201-render"
              demoLink="https://webdd6201-prerakpatel.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/prerakkumarpatel/Editor.io-master"
              demoLink="https://codeeditor-5qqh.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense Tracker"
              description="Empower financial management with React-based Expense Tracker. Visualize spending patterns through interactive UI, enabling users to monitor and optimize expenses for a healthier financial outlook"
              ghLink="https://github.com/prerakkumarpatel/expense-tracker-react"
              demoLink="https://expense-tracker-react.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tarneeb}
              isBlog={false}
              title="Tarneeb (Trump Card)"
              description="Introducing CardQuest: A captivating card game crafted with C# for a robust backend, WPF for a visually stunning UI, and a paramount emphasis on Object-Oriented Programming (OOP). Immerse yourself in strategic gameplay and a seamless gaming experience."
              ghLink="https://github.com/Zeel-Sutariya/TarneebCardGame"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbas}
              isBlog={false}
              title="Lackridge Hospital Management System"
              description="Employing SDLC, client requirements were gathered for 'Control Centre of Neo.' Utilized C# backend, WPF UI, and OOP principles. Designed database and dashboard for seamless data access and management"
              ghLink="https://github.com/prerakkumarpatel/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="Built a dynamic blog site using js, offering engaging UI and seamless navigation. Integrated features for posts, comments, and user interaction to enhance the blogging experience."
              ghLink="https://github.com/prerakkumarpatel/ejs-challenge-final"
              demoLink="https://blog-page-ud8f.onrender.com/posts/Patel"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buber}
              isBlog={false}
              title="Tomato"
              description="Developed Tomato Food Delivery app using React and Firebase. Seamless ordering experience, real-time updates, and secure transactions make it a reliable platform for food enthusiasts"
              ghLink="https://github.com/prerakkumarpatel/food-ordering-app-react"
              demoLink="https://buber-eats-order-anytime.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
