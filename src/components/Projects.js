import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Loan Matrix Smart Data Insights ",
    description: "Powerful Features for Smarter Lending - Advanced Topic Modeling,Real-time Predictions , Comprehensive Analytics , Secure & Compliant",
    tags: ["", "", ""],
    image: "project-1.jpg"
  },
  {
    title: "",
    description: "",
    tags: ["", "", ""],
    image: ""
  },
  {
    title: "",
    description: "",
    tags: ["", "", ""],
    image: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">Portfolio</h2>
        </div>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="card-custom h-100 border-0">
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <div className="position-absolute w-100 h-100 bg-dark opacity-25 hover-opacity-0 transition-all"></div>
                  <Card.Img variant="top" src={project.image} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                </div>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold mb-3 text-white">{project.title}</Card.Title>
                  <Card.Text className="text-white mb-4 flex-grow-1 small">
                    {project.description}
                  </Card.Text>
                  <div className="mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge bg="dark" className="border border-secondary text-accent me-2 mb-2 px-3 py-2 fw-normal" key={i}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="d-flex gap-3">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://github.com/meetvaghani20/Credit-Guard.git" className="btn btn-sm btn-outline-light rounded-pill px-3 d-flex align-items-center gap-2 hover-accent">
                      <FaGithub /> Code
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="https://credit-guard.netlify.app/" className="btn btn-sm btn-custom rounded-pill px-3 d-flex align-items-center gap-2">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
