import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/nav-icon4.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ishanema/"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <div className="social-icon">
                <a href="https://github.com/ishan0308"><img src={navIcon4} alt="" /></a>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
