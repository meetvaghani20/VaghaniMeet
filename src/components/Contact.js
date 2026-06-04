import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const whatsappNumber = '919327434099';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const whatsappMessage = [
      'New contact form message',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message: ${message}`
    ].join('\n');

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer'
    );

    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">Contact Me</h2>

        </div>
        <Row className="g-4">
          {/* Contact Info */}
          <Col lg={4} data-aos="fade-right">
            <div className="card-custom p-4 h-100 bg-glass">
              <h3 className="fw-bold mb-4">Contact Info</h3>
              <p className="text-white mb-4">
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis.
              </p>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="p-3 bg-glass rounded-circle text-accent">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Our Location</h6>
                  <p className="text-white mb-0">Bhavnagar, Gujarat, India</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="p-3 bg-glass rounded-circle text-accent">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Phone Number</h6>
                  <p className="text-white mb-0">+91 9327434099</p>
                </div>
              </div>
              <div className="d-flex align-items-start gap-3">
                <div className="p-3 bg-glass rounded-circle text-accent">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email Address</h6>
                  <p className="text-white mb-0">meetvaghani601@gmail.com</p>

                </div>
              </div>
            </div>

          </Col>

          {/* Contact Form */}
          <Col lg={8} data-aos="fade-left">
            <div className="card-custom p-5 bg-glass">
              <h3 className="fw-bold mb-4">Get In Touch</h3>
              <p className="text-white mb-4">Praesent sapien massa, convallis a pellent</p>

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="small fw-bold text-white">Your Name</Form.Label>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="bg-transparent border-secondary text-white p-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="small fw-bold text-white">Your Email</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent border-secondary text-white p-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold text-white">Subject</Form.Label>
                  <Form.Control
                    name="subject"
                    type="text"
                    placeholder="Enter subject"
                    className="bg-transparent border-secondary text-white p-3"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="small fw-bold text-white">Message</Form.Label>
                  <Form.Control
                    name="message"
                    as="textarea"
                    rows={5}
                    placeholder="Your message"
                    className="bg-transparent border-secondary text-white p-3"
                    required
                  />
                </Form.Group>
                <button type="submit" className="btn btn-custom w-100 d-flex align-items-center justify-content-center gap-2">
                  <FaPaperPlane /> Send Message
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};

export default Contact;
