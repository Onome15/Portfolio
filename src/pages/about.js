import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import './about.css';
import card from './card.jpg'
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3Full } from "react-icons/di";
import { SiBootstrap } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaGit } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

const About = () => {
  return (
       <div className='abt' id='about'>

      <Row>
        <Col xs={12} md={4}>
          <Card border='light' style={{ width: '98%', margin: '0 auto' }}>
            <Card.Img variant="top" id='img' src={card} className='rounded-circle img-fluid' alt='My photo' />
            <Card.Body style={{ textAlign: 'center', fontSize: '100%' }}>
              <Card.Title>Orhero Joe Onome</Card.Title>
              <Card.Subtitle>
                Front-end Developer| Reactjs Developer | Web Designer
              </Card.Subtitle>
              <br />

              <Button variant="outline-primary" style={{ fontWeight: 'bold'}}><a href='https://drive.google.com/file/d/1obtBBcB9q-nrJDeJnY5sJcxH0C_0aX28/view?usp=sharing'  target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Downlaod Resume</a></Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={8} className='rw'>
          <h1 className='line'>About Me</h1>
          <p>
            I am a <span style={{ color: '#0275d8' }}>front-end developer</span> with a flair for building interactive single page applications with responsive layouts that are fast, scalable and built with best practices.
          </p>
          <p>
            I have a year of experience as a freelancer and proficiency in varieties of tools and languages with a voracious ability to learn new technologies as well.
          </p>
          <h2 className='lin'>Skills</h2>

          <Row className='rq'>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >HTML</legend>
                <ImHtmlFive2 color='rgba(240, 101, 41, 1)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >CSS</legend>
                <DiCss3Full color='rgb(41, 101, 241)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Bootstrap</legend>
                <SiBootstrap color='rgb(86, 61, 124)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Javascript</legend>
                <DiJavascript1 color='rgb(240, 219, 79)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >React</legend>
                <FaReact color='rgb(97, 219, 251)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Redux</legend>
                <SiRedux color='rgb(118, 74, 188)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' > TailwindCSS</legend>
                <SiTailwindcss color='rgb(52, 144, 220)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Tyepscript</legend>
                <SiTypescript color='	rgb(0, 122, 204)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Nextjs</legend>
                <SiNextdotjs color='black' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >jQuery</legend>
                <SiJquery color='rgb(7, 105, 173)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >Git/Github </legend>
                <FaGit color='rgb(7, 105, 173)' size={50} />
              </fieldset>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <fieldset className='about'>
                <legend className='about' >VS Code </legend>
                <SiVisualstudiocode color='rgb(0, 120, 215)' size={50} />
              </fieldset>
            </Col>
          </Row>
        </Col>
      </Row>
      <br /><br />



    </div>
  
  );
}

export default About;