import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import ThreeBackground from './ThreeBackground';
import meetImg from '../PHOTO/meet (1).png';

const Hero = () => {
  return (
    <section id="home" className="hero-sections" style={{ position: 'relative' }}>
      <ThreeBackground />

      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h5 className="text-accent mb-5 fw-bold ls-2">HELLO, I'M VAGHANI MEET</h5>
            <h1 className="display-1 fw-bold mb-5 lh-1">
              Creative <span className="text-gradient">Developer</span>
            </h1>
            <p className="lead text-white mb-5" style={{ maxWidth: '600px' }}>
              I build exceptional digital experiences that are fast, accessible, and visually stunning.
              Turning complex problems into simple, beautiful solutions.
            </p>
            <div className="d-flex gap-3 mb-5">
              <a href="#projects" className="btn btn-custom">View My Work</a>
              <a href="#contact" className="btn btn-custom rounded-pill px-4 py-2 fw-bold d-flex align-items-center ">Contact Me</a>
            </div>
            <div className="d-flex gap-4 text-secondary  ">
              {[
                { icon: FaGithub, href: 'https://github.com/meetvaghani20' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/meet-vaghani-014537285' },
                { icon: FaTwitter, href: 'https://x.com/meetvaghani601' },
                { icon: FaInstagram, href: 'https://www.instagram.com/vaghani_204' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center hover-up"
                  style={{ width: '45px', height: '45px', borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <social.icon className="text-white" size={18} />
                </a>
              ))}
              {/* <FaGithub size={24} className="hover-accent cursor-pointer" />
              <FaLinkedin size={24} className="hover-accent cursor-pointer" />
              <FaTwitter size={24} className="hover-accent cursor-pointer" />
              <FaInstagram size={24} className="hover-accent cursor-pointer" /> */}
            </div>
          </Col>
          <Col lg={6} className="text-center d-none d-lg-block" data-aos="fade-left">
            <div className="position-relative animate-float">
              <div className="position-absolute top-50 start-50 translate-middle w-75 h-75 bg-glass rounded-circle" style={{ zIndex: -1 }}></div>
              <img
                src={meetImg}
                alt="Vaghani Meet 3D Character"
                className="img-fluid"
                style={{
                  maxHeight: '500px',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
