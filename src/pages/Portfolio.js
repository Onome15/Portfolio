import React from 'react'
import styles from './portfolio.module.css'
import { Carousel, Card, Button, Container, Col, Row } from 'react-bootstrap';
import mall from './phone_mall.png'
import crypto from './crypto_news.png'
import talentnest from './talentnest.png'
import calculator from './calculator.png'
import portfolio from './portfolio.png'
import cgpa from './cgpacalc.png'
import { GoEye } from "react-icons/go";
import { AiFillGithub } from 'react-icons/ai';

const projects = [
  { image: mall, title: "Phone Ecommerce", about: " Nextjs | Tailwindcss", githubView: "https://github.com/Onome15/Phone-mall" , href: 'https://phone-mall.netlify.app/', id: "1" },
  { image: crypto, title: "Crypto News", about: " Nextjs | Tailwindcss", githubView: "https://github.com/Onome15/Phone-mall", href: 'https://github.com/Onome15', id: "2" },
  { image: talentnest, title: "TalentNest", about: "Nextjs | Bootstrap | CSS", githubView: "https://github.com/Onome15/TalentNest", href: 'https://talentnestjoe.netlify.app/', id: "3" },
  { image: portfolio, title: "Portfolio", about: "Reactjs | Bootstrap | CSS", githubView: "https://github.com/Onome15/Portfolio", href: 'https://joetechon.netlify.app/', id: "4" },
  { image: calculator, title: "A Simple Calculator", about: "Reactjs | CSS", githubView: "https://github.com/Onome15/Portfolio", href: 'https://joesimplecalc.netlify.app/', id: "5" },
  { image: cgpa, title: "CGPA Calculator", about: "Vanilla Javascript | CSS", githubView: "https://github.com/Onome15/CGPA-Calculator", href: 'https://joecgpacalc.netlify.app/', id: "6" },
];

const testimonials = [
  { name: "Samiroje Yoma", image: portfolio, comment: "loremsdfsi", interval: 1000, },
  { name: "Ansel Omamuyovwi", image: cgpa, comment: "Hellefdszs", interval: 3000, },
  { name: "William Francisca", image: mall, comment: "Helfvsds", interval: 500, },
]
const Portfolio = () => {
  return (
    <div className={styles.main} id='portfolio'>
      <h1 className={styles.line}> Portfolio</h1>
      <div className={styles.projects}>
        <Container>
          <Row>
            {projects.map(project => (
              <Col xs={12} md={6} lg={4}>
                <Card className={styles.proCard}>
                  <div style={{ overflow: 'hidden' }} >
                    <Card.Img variant="top" key={project.id} src={project.image} className={styles.proImg} />
                  </div>
                  <Card.Body>
                    <Card.Title>  {project.title}</Card.Title>
                    <Card.Text>
                      {project.about}
                    </Card.Text>
                    <ul className = "text-center">
                    <li><a href={project.href} target="_blank" rel="noopener noreferrer"><GoEye color='#0275d8' size={50} className='pe-2' /></a> </li>
                      <li><a href={project.githubView} target="_blank" rel="noopener noreferrer"><AiFillGithub color='#0275d8' size={40} className='ps-2' /></a> </li>
                      
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className={styles.testimonial}>
        <div className={styles.testOverlay}>
          <h1 className={styles.line}> Testimonials</h1>
          <Carousel variant="dark" id='caro' fade style={{ alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {testimonials.map(testimonials => (
              <Carousel.Item interval={testimonials.interval}>
                <Card className={styles.card} >
                  <Card.Img variant="top" src={testimonials.image} className={styles.img} alt='My photo' />
                  <Card.Body style={{ textAlign: 'center', fontSize: '70%' }}>
                    <Card.Subtitle>
                      {testimonials.comment}</Card.Subtitle> <br />
                    <Card.Title>- {testimonials.name}</Card.Title>
                  </Card.Body>
                </Card>
                <br /><br /><br />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}





export default Portfolio