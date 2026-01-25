import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
  return (

    <section id="about" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">About Me</h2>

        </div>
        <Row className="align-items-center mb-5">
          <Col lg={5} className="mb-5 mb-lg-0" data-aos="fade-right">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient opacity-25 rounded-4" style={{ transform: 'translate(-20px, -20px)', zIndex: -1 }}></div>
              <img
                src="/IMG_0578.jpg"
                alt="Meet Profile"
                className="img-fluid rounded-4 shadow-lg w-100"
                style={{ objectFit: 'cover', height: '850px' }}
              />
            </div>
          </Col>
          <Col lg={7} className="ps-lg-5" data-aos="fade-left">
            <div className="card-custom p-5 bg-glass">
              <h3 className="fw-bold mb-4">About Me</h3>
              <h5 className="mb-4">Name: Vaghani Meet K</h5>
              <h5 className="mb-4">Age: 20</h5>
              <h5 className="mb-4">Email: meetvaghani601@gmail.com</h5>
              <h5 className="mb-4">Address: Bhavnagar, Gujarat, India</h5>
              <h5 className="mb-4">Currently: Bachelor of Computer Applications Student & Web Developer</h5>
              <p className="text-white mb-5">
                Hey there! I’m Vaghani Meet, a creative Full-Stack Developer with a passion for building intuitive and scalable web applications. I enjoy crafting dynamic front-end interfaces and robust back-end systems that bring ideas to life. I’m always experimenting with new technologies to improve efficiency and create better solutions. Outside of coding, I enjoy solving complex problems and collaborating with like-minded developers. Let’s build something amazing together!
              </p>
              <div className="d-flex flex-wrap gap-3 mb-5">
                <a href="#projects" className="btn btn-custom px-4">View My Work</a>
                <a href="#resume" className="btn btn-custom rounded-pill px-4 py-2 fw-bold">Download Resume</a>
              </div>

              <div className="pt-4 border-top border-secondary">
                <h6 className="fw-bold mb-3 text-accent">Interests</h6>
                <div className="d-flex flex-wrap gap-2">
                  {['Developing', 'Editing', 'Designar', 'Photography', 'Travelling', 'Videography',].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-dark rounded-pill border border-secondary small text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

