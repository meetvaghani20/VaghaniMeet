import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectOneImage from '../PHOTO/project1.jpg';
import projectTwoImage from '../PHOTO/logo192.jpg';

const projects = [
  {
    title: 'Loan Matrix Smart Data Insights',
    description:
      'Powerful features for smarter lending with advanced topic modeling, real-time predictions, comprehensive analytics, and secure workflows.',
    tags: ['Topic Modeling', 'Predictions', 'Analytics'],
    image: projectOneImage,
    codeUrl: 'https://github.com/meetvaghani20/Credit-Guard.git',
    liveUrl: 'https://credit-guard.netlify.app/'
  }
  ,
  
  {
    title: 'MeetFilms',
    description:
      'Professional Video Shooter & Video Editor crafting refined films for brands, creators, events, products, and premium digital campaigns.',
    tags: ['Video Shooting', 'Video Editing', 'Instagram Reels Editing','Instagram Handling','Event Video Shoot','Business Reel Shooting'],
    image: projectTwoImage,
    codeUrl: 'https://github.com/meetvaghani20/meetfilms.git',
    liveUrl: 'https://meetfilms4.vercel.app/'
  }
].filter((project) => project.title && project.description);

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">Portfolio</h2>
        </div>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="card-custom h-100 border-0">
                <a
                  href={project.liveUrl || '#'}
                  target={project.liveUrl ? '_blank' : undefined}
                  rel={project.liveUrl ? 'noopener noreferrer' : undefined}
                  aria-label={`Open ${project.title} live project`}
                  style={{
                    height: '220px',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'block',
                    cursor: project.liveUrl ? 'pointer' : 'default'
                  }}
                >
                  <div className="position-absolute w-100 h-100 bg-dark opacity-25 hover-opacity-0 transition-all"></div>
                  {project.image ? (
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={`${project.title} preview`}
                      style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-center h-100 text-white-50">
                      Project image coming soon
                    </div>
                  )}
                </a>
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold mb-3 text-white">{project.title}</Card.Title>
                  <Card.Text className="text-white mb-4 flex-grow-1 small">
                    {project.description}
                  </Card.Text>
                  <div className="mb-4">
                    {project.tags
                      .filter(Boolean)
                      .map((tag) => (
                        <Badge bg="dark" className="border border-secondary text-accent me-2 mb-2 px-3 py-2 fw-normal" key={tag}>
                          {tag}
                        </Badge>
                      ))}
                  </div>
                  <div className="d-flex gap-3">
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-light rounded-pill px-3 d-flex align-items-center gap-2 hover-accent"
                      >
                        <FaGithub /> Code
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-custom rounded-pill px-3 d-flex align-items-center gap-2"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    ) : null}
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
