import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import meter1 from "../assets/img/rightline.png";
import meter2 from "../assets/img/leftline.png";
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';

export const Career = () => {
    const career = {
        border: '5px solid purple',
        borderRadius: '20px',
  };
    return (
        <section class="career" id="career">
        <div class="container mb-5">
            <h1>Career Path</h1>
            <div class="row mt-5" >
                <div style={career} class="col-lg-6 p-4" >
                    <div class="career-step">
                        <div class="career-step-content">
                            <div class="content">
                                <h3>Cloudera</h3>
                                <h4>Software Developer Intern</h4>
                                <p>• Expanded automation coverage for cloud certifications, reduced certification time by 10%.</p>
<p>• Utilized tools such as Python, Docker, Kubernetes, Ansible, ElasticStack and Airflow to automate cloud certification processes and increase efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <h3 class="d-none d-lg-flex "><ArrowLeft size={100} /></h3>
                    <h3>Jan 2023 - Jul 2023</h3>
                </div>
            </div>
            <div class="row mt-5 ">
                <div class="col-lg-6 col-sm-12 d-none d-lg-flex align-items-center justify-content-center">
                    <h3>Feb 2022 - Jul 2022</h3>
                    <h3><ArrowRight size={100} /></h3>
                </div>
                <div style={career} class="col-lg-6 col-sm-12 p-4">
                    <div class="career-step">
                        <div class="career-step-content">
                            <div class="content">
                                <h3>Gravitas AI</h3>
                                <h4>Chatbot Developer Intern</h4>
                                <p>• Devised a chatbot for an eye hospital using AWS suite of products Lex, Lambda, S3.</p>
<p>• AWS LexV2 for conversational user interface; Lambda to process and respond to user requests; S3 buckets for storage; CloudWatch for log maintenance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12 d-lg-none d-flex align-items-center justify-content-center">
                    <h3>Feb 2022 - Jul 2022</h3>
                </div>
            </div>
            <div class="row mt-5">
                <div style={career} class="col-lg-6 p-4">
                    <div class="career-step">
                        <div class="career-step-content">
                            <div class="content">
                                <h3>Cloudera</h3>
                                <h4>Software Developer Engineer</h4>
                                <p></p>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <h3 class="d-none d-lg-flex "><ArrowLeft size={100} /></h3>
                    <h3 >Jan 2023 - Now</h3>
                </div>
            </div>
            <div class="row mt-5 ">
                <div class="col-lg-6 col-sm-12 d-none d-lg-flex align-items-center justify-content-center">
                    <h3>June 2019 - July 2023</h3>
                    <h3><ArrowRight size={100} /></h3>
                </div>
                <div style={career} class="col-lg-6 p-4">
                    <div class="career-step">
                        <div class="career-step-content">
                            <div class="content">
                                <h3>B. Tech</h3>
                                <h4>Manipal Institute of Technology</h4>
                                <p>I have done my Bachellors of Technology in Computer Science Engineering field</p>
                                <p>Achieved GPA of 9.44</p>
                                <br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}