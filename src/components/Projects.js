import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Restaurant Website",
      description: "FrontEnd",
      imgUrl: projImg1,
      content:" Frontend for a Restaurant Website using HTML, CSS, JavaScript, and Bootstrap.",
      link:"https://sprightly-pika-3d935f.netlify.app/",
    },
  ];
  const projects2 = [
    {
      title: "TVShow/Movie Search Website",
      description: "FrontEnd",
      imgUrl: projImg2,
      content:" Website for searching Movies and Web Series using axios library and user-entered keywords.",
      link:"https://main--steady-caramel-afbdfc.netlify.app/",
    },
  ];

  const projects3 = [
    {
      content:" Project for adding and modifying student details, generating grade, ranks of students, finding merit students, displayed in tabular format.",
      link:"https://main--steady-caramel-afbdfc.netlify.app/",
    },
    {
      content:" Designed code for CPU scheduling Algos: First-Come First-Served, Shortest-Job-First, Priority and Round Robin; for multiprogrammed OS.",
      link:"https://main--steady-caramel-afbdfc.netlify.app/",
    },
    {
      content:" Guided project employing linear regression to determine country life expectancy; from the World Health Organization (WHO) dataset",
      link:"https://main--steady-caramel-afbdfc.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 class="mb-5">Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
