import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,content,link }) => {
  return (
  <Row>
    <Col size={12} sm={6} md={6}>
      <a href={link} style={{ color: 'inherit', textDecoration: 'none' }} target="_blank">
        <div class="col-12" className="proj-imgbx">
          <img src={imgUrl} />
           <div className="proj-txtx">
             <h4>{title}</h4>
             <span>{description}</span>
           </div>
        </div>
      </a>
    </Col>
    <Col size={12} sm={6} md={6}>
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="mt-5">
            <p class="text-white">{content}</p>
      </div>
      </div>
    </Col>
    </Row>
  )
}
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
