import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaServer } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa6';

const services = [
  {
    icon: <FaLaptopCode size={40} className="text-accent mb-3" />,
    title: "Web Development",
    description: "Building responsive and performant websites using modern technologies like HTML, CSS, JavaScript,React,bootstrap and php."
  },

  {
    icon: <FaServer size={40} className="text-accent mb-3" />,
    title: "Backend Development",
    description: "Designing and implementing robust RESTful APIs and database architectures. 'PHP, MySQL, phpMyAdmin'."
  },
  {
    icon: <FaVideo size={40} className="text-accent mb-3" />,
    title: "Video Editing",
    description: "Creating and editing high- quality videos using professional tools to enhance visuals, audio, transitions, and storytelling for social media, marketing, and creative projects."

  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">Services</h2>

        </div>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="card-custom h-100 p-4 border-0 text-white hover-up bg-glass">
                <Card.Body>
                  <div className="mb-4 d-inline-block p-3 rounded-circle bg-dark border border-secondary text-accent">
                    {service.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-white">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
