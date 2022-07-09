import React from 'react'
import styles from './portfolio.module.css'
import { Carousel, Card, Button, Container, Col, Row } from 'react-bootstrap';
import ba from './ba.jpg'
import bg from './bg.jpg'
import bc from './bc.jpg'

const Portfolio = () => {
  return (
    <div className={styles.main} id='portfolio'>
      <h1 className={styles.line}> Portfolio</h1>
      <div className={styles.projects}>
        <Container>
          <Row >
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={ba} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title>  A simple Calculator</Card.Title>
                  <Card.Text>
                    Reactjs | CSS
                  </Card.Text>
                  <Button variant="outline-primary" style={{ fontWeight: 'bold'}}><a href='https://joesimplecalc.netlify.app/'  target="_blank"rel="noopener noreferrer" style={{textDecoration:'none'}}>VIEW</a></Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={bg} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title> Todo App</Card.Title>
                  <Card.Text>
                    Reactjs | CSS
                  </Card.Text>
                  <Button variant="primary">VIEW</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={bc} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">VIEW</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={ba} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">VIEW</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={ba} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">VIEW</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className={styles.proCard}>
                <div style={{ overflow: 'hidden' }}>
                  <Card.Img variant="top" src={ba} className={styles.proImg} />
                </div>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">VIEW</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.testimonial}>
        <div className={styles.testOverlay}>
        <h1 className={styles.line}> Testimonials</h1>

        <Carousel variant="dark" id='caro' fade style={{ alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Carousel.Item>
            <Card className={styles.card} >
              <Card.Img variant="top" src={bc} className={styles.img} alt='My photo' />
              <Card.Body style={{ textAlign: 'center', fontSize: '70%' }}>
                <Card.Subtitle>
                  " Itaque molestiae quisquam ea non fugiat, assumenda recusandae nemo, vel eum ratione unde iste officia optio distinctio soluta est. Excepturi, fuga sapiente!"
                </Card.Subtitle> <br />
                <Card.Title>- Samiroje Ogheneyoma</Card.Title>
              </Card.Body>
            </Card>
            <br /><br /><br />
          </Carousel.Item>

          <Carousel.Item interval={3000}>
            <Card className={styles.card} >
              <Card.Img variant="top" src={ba} className={styles.img} alt='My photo' />
              <Card.Body style={{ textAlign: 'center', fontSize: '70%' }}>
             
                <Card.Subtitle>
                  " Itaque molestiae quisquam ea non fugiat, assumenda recusandae nemo, vel eum ratione unde iste officia optio distinctio soluta est. Excepturi, fuga sapiente!"
                   </Card.Subtitle><br />
                <Card.Title> - Omamuyovwi Ansel</Card.Title>
              </Card.Body>
            </Card>
            <br /><br /><br />
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <Card className={styles.card} >
              <Card.Img variant="top" src={bg} className={styles.img} alt='My photo' />
              <Card.Body style={{ textAlign: 'center' }}>
       
                <Card.Subtitle>
                  " Itaque molestiae quisquam ea non fugiat, assumenda recusandae nemo, vel eum ratione unde iste officia optio distinctio soluta est. Excepturi, fuga sapiente!"
                     </Card.Subtitle> <br />
                <Card.Title>- Williams Francisca</Card.Title>
              </Card.Body>
            </Card>
            <br /><br /><br />
          </Carousel.Item>

        </Carousel>
      </div>
      </div>
    </div>
  )
}

export default Portfolio