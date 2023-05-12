import meter1 from "../assets/img/python.png";
import meter2 from "../assets/img/c.png";
import meter3 from "../assets/img/webdev.png";
import meter4 from "../assets/img/aws.png";
import meter5 from "../assets/img/docker.png";
import meter6 from "../assets/img/kub.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 4000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br/>
                        <br/>
                    <div class="row">
                            <div className="col-md-4 col-sm-12 item container-fluid">
                                <img src={meter1} alt="Image" style={{ width: '150px' }} />
                                <h5>Python</h5>
                            </div>
                            <div className="col-md-4 col-sm-12 item container-fluid">
                                <img src={meter2} alt="Image" style={{ width: '165px' }}/>
                                <h5>C</h5>
                            </div>
                            <div className="col-md-4 col-sm-12 item container-fluid ">
                                <img src={meter3} alt="Image" style={{ width: '192px' }}/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="col-md-4 col-sm-12 item container-fluid">
                                <img src={meter4} alt="Image" style={{ width: '18em' }}/>
                                <h5>AWS</h5>
                            </div>
                            <div className="col-md-4 col-sm-12 item container-fluid">
                                <img src={meter5} alt="Image" style={{ width: '164px' }}/>
                                <h5>Docker</h5>
                            </div>
                            <div className="col-md-4 col-sm-12 item container-fluid">
                                <img src={meter6} alt="Image" style={{ width: '210px' }}/>
                                <h5>Kubernetes</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
