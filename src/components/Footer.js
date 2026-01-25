import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-5 pb-3 border-top border-secondary bg-glass position-relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      {/* Decorative Glow */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x w-100" style={{ height: '300px', background: 'radial-gradient(circle at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }}></div>

      <Container>
        <Row className="gy-5 justify-content-between mb-5">
          {/* Brand Column */}
          <Col lg={4} md={12}>
            <div className="mb-4">
              <h3 className="fw-bold text-accent mb-3">Vaghani Meet</h3>
              <p className="text-white mb-4" style={{ maxWidth: '300px' }}>
                Crafting digital experiences with a focus on minimalism, aesthetics, and performance.
              </p>
            </div>
          </Col>

          {/* Links Column */}
          <Col lg={4} md={6}>
            <h5 className="fw-bold text-white mb-4">Quick Links</h5>
            <Nav className="flex-column gap-2">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Services', 'Projects', 'Contact'].map((item) => (
                <Nav.Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary p-0 hover-accent d-inline-block transition-all"
                  style={{ width: 'fit-content' }}
                >
                  {item}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Socials Column */}
          <Col lg={4} md={6}>
            <h5 className="fw-bold text-white mb-4">Connect Me</h5>
            <div className="d-flex gap-3 mb-4">
              {[
                { icon: FaGithub, href: 'https://github.com' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaInstagram, href: 'https://instagram.com' }
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
            </div>
            <p className="text-white small">
              Feel free to reach out for collaborations or just a friendly hello <span role="img" aria-label="wave">👋</span>
            </p>
          </Col>
        </Row>

        {/* Copyright Bar */}
        <div className="pt-4 border-top border-secondary text-center" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-white small mb-0">
            © {new Date().getFullYear()} VAGHANI MEET K. All rights reserved.

          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
