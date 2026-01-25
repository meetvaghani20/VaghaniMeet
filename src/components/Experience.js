import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="Experience" className="section-padding">
            <Container>
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="text-accent fw-bold mb-2">Experience</h2>

                </div>

                <Row>
                    <center>
                        <Col lg={6} >
                            <h3 className="  fw-bold mb-4 text-white "><FaBriefcase className="text-accent me-2 center " /> Professional Experience</h3>

                            <div className="timeline-item mb-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="card-custom p-4">
                                    <h4 className="fw-bold mb-1 text-white">Aksharraj Infotech</h4>
                                    <div className="text-accent mb-2">2024 - 2025</div>
                                    <p className="fst-italic text-white mb-2">Internship</p>
                                    <ul className="text-white ps-3 mb-0 small">
                                        <p>Completed an internship as a web Developer(HTML,CSS,Bootstrap,JavaScript) at Aksharraj Infotech, gaining hands-on experience in web development. Assisted in building and managing web applications, improving technical skills, and working closely with senior developers to understand best practices.</p>
                                    </ul>
                                </div>
                            </div>

                            <div className="timeline-item mb-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="card-custom p-4">
                                    <h4 className="fw-bold mb-1 text-white">Gyanmanjari Innovative University</h4>
                                    <div className="text-accent mb-2">2024 - 2025</div>
                                    <p className="fst-italic text-white mb-2">videography, Editing
                                        Photography,</p>
                                    <ul className="text-white ps-3 mb-0 small">
                                        <li className="mb-1">KALAMANJARI-2024 - Photography,
                                            videography, Editing</li>
                                        <li className="mb-1">Tech Manjari-2025
                                            Photography, videography, Editing
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </center>
                </Row>
            </Container>
        </section >
    );
};

export default Experience;