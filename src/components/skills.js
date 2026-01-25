import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
const skills = () => {
    const skills = [
        { name: 'HTML', value: 90, },
        { name: 'CSS', value: 80, },
        { name: 'JavaScript', value: 70, },
        { name: 'PHP', value: 60, },
        { name: 'Bootstrap', value: 80, },
        { name: 'Figma', value: 60, },
        { name: 'Python', value: 40, },

    ];
    const skills1 = [
        { name: 'React', value: 50, },
        { name: 'SQL', value: 65, },
        { name: 'Phpmyadmin', value: 70, },
        { name: 'WordPress', value: 60, },
        { name: 'GitHub', value: 60, },
        { name: 'Git', value: 50, },
        { name: 'CapCut', value: 90, },
        { name: 'Premiere Pro', value: 90, },

    ]
    return (
        <section id="skills" className="section-padding">
            <Container>
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="text-accent fw-bold mb-2">Skills</h2>

                </div>
                {/* Skills Section */}
                <Row className="mb-5 g-4">
                    <Col lg={6} data-aos="fade-up">
                        <div className="card-custom p-5 bg-glass h-100">
                            <h3 className="fw-bold mb-4">Technical Skills</h3>
                            {skills.map((skill, index) => (
                                <div key={index} className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-bold">{skill.name}</span>
                                        <span className="text-accent">{skill.value}%</span>
                                    </div>
                                    <ProgressBar
                                        now={skill.value}
                                        style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        className="custom-progress"
                                    />
                                    <p className="small text-secondary mt-2 mb-0">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-up" data-aos-delay="100">
                        <div className="card-custom p-5 bg-glass h-100">
                            {skills1.map((skill, index) => (
                                <div key={index} className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-bold">{skill.name}</span>
                                        <span className="text-accent">{skill.value}%</span>
                                    </div>
                                    <ProgressBar
                                        now={skill.value}
                                        style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}
                                        className="custom-progress"
                                    />
                                    <p className="small text-secondary mt-2 mb-0">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>


            </Container>
        </section>
    );
};

export default skills;