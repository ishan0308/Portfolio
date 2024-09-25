import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl, content, link }) => {
  return (
    <Row className="my-3">
      <Col xs={12} md={6}>
        <a href={link} style={{ color: 'inherit', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} style={{ width: '100%', height: 'auto'}} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </Col>
      <Col xs={12} md={6} className="d-flex align-items-center">
        <div className="mt-3 mt-md-0">
          <p>{content}</p>
        </div>
      </Col>
    </Row>
  );
};
export const ProjectCard2 = ({ content}) => {
  const career = {
    border: '5px solid purple',
    borderRadius: '20px',
  };
  return (
    <Col size={12} sm={12} md={12} lg={4}>
      <div style={career} class="container-fluid">
            <p class="text-white">{content}</p>
      </div>
    </Col>
  )
}
