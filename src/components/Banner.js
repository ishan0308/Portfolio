import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Web Developer","DevOps Engineer","Cloud Engineer" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const textSize = {
    sm: '35px', // Text size for small screens
  };

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`Hi! I'm Isha Nema!`}</h1>
                <h1 style={{ fontSize: textSize.sm }}><span className="txt-rotate" dataPeriod="100" data-rotate='[ "Software Developer", "Web Developer", "DevOps Engineer","Cloud Engineer"]'><span className="wrap">{text}</span></span></h1>
                  <p>Highly motivated and results-driven software developer with a passion for coding and continuous learning. Exceptionally skilled in Python, C, and web development. Experienced in automating cloud certification processes, designing chatbots using AWS, and completing diverse projects showcasing proficiency in various programming languages, frameworks, and tools. Strong analytical mindset, problem-solving abilities, and a collaborative approach to drive innovation and deliver high-quality code. Seeking a challenging software developer position to contribute to a dynamic team and make a positive impact in the industry.</p>
                  <HashLink to="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
    </Router>
  )
}
