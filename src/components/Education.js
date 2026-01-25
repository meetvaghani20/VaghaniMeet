import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="Education" className="section-padding">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="text-accent fw-bold mb-2">Education</h2>

        </div>

        <Row>
          <center>


            <Col lg={6} className="mb-5 mb-lg-0">
              <h3 className="fw-bold mb-4 text-white"><FaGraduationCap className="text-accent me-2" /> Education</h3>

              <div className="timeline-item mb-4" data-aos="fade-up" data-aos-delay="100">
                <div className="card-custom p-4">
                  <h4 className="fw-bold mb-1 text-white">Bachelor of Computer Applications(BCA)</h4>
                  <div className="text-accent mb-2">2023 - 2026 - Present</div>
                  <p className="fst-italic text-white mb-2">Gyanmanjari Innovative University-Bhavnagar, Gujarat, India</p>

                </div>
              </div>

              <div className="timeline-item mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="card-custom p-4">
                  <h4 className="fw-bold mb-1 text-white">12'th Commerce</h4>
                  <div className="text-accent mb-2">2021 - 2023</div>
                  <p className="fst-italic text-white mb-2">Takshashila School-Bhavnagar, Gujarat</p>

                </div>
              </div>
              <div className="timeline-item mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="card-custom p-4">
                  <h4 className="fw-bold mb-1 text-white">10'th</h4>
                  <div className="text-accent mb-2">2021</div>
                  <p className="fst-italic text-white mb-2">Vidyamanjari Gnanpith, Sanskruti School,-Bhavnagar, Sihor, Gujarat</p>

                </div>
              </div>

              <h3 className="fw-bold mb-4 text-white"><FaCode className="text-accent me-2" /> Professional Skills</h3>
              <div className="card-custom p-4" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex flex-wrap gap-2">
                  {['Frontend Development', 'Backend Development', 'UI/UX Design', 'Project Management', 'Photography ', 'Editing', 'videography'].map((skill, index) => (
                    <Badge key={index} bg="transparent" className="border border-secondary text-white p-2 fw-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          </center>
        </Row>
      </Container>
    </section>
  );
};

export default Education;