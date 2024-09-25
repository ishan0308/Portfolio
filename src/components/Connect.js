import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/connect/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import EmailLink from './EmailLink';
import '../App.css';

export const Connect = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                  <Row>
                    <Col size={12} sm={12} className="px-1">
                        <div>
                        <div class="rounded border border-3 p-4">
                            <h3>Email me at -  <EmailLink email="ishanemawork@gmail.com" /></h3>
                        </div>
                        <div class="rounded border border-3 p-4 mt-4">
                            <h3>Connect through Linkedln - </h3>
                            <a style={{textDecoration: 'none'}} className="text3d"  href="https://www.linkedin.com/in/ishanema/" target="_blank">
                                <h4>www.linkedin.com/in/ishanema/</h4>
                            </a>
                        </div>
                        </div>
                    </Col>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
