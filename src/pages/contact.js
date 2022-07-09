import React from 'react'
import styles from './contact.module.css';
import { Row, Col, Container, } from 'react-bootstrap';
import Form from './Form.js';
import { GoLocation } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";
import { VscMail } from "react-icons/vsc";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return ( 
    <div className={styles.bg} id='contact'>
      <div className={styles.bs}>

        <Container>
          <Row className={styles.bb}>

            <Col xs={12} md={5} className="pt-3">
              <h2 className='line pb-3'>Send a Message</h2>
              <Form />
            </Col>
            <Col xs={12} md={5} className="pt-3">
              <h2 className='line pb-3'>Get in Touch</h2>
              <p style={{ fontSize: '18px' }}>You will receive a message swiftly when you contact me with any of the details below. </p>
              <p style={{ fontSize: '18px' }}><GoLocation color='#0275d8' size={30} />     Delta State, Nigeria</p>
              <p style={{ fontSize: '18px' }}><BsTelephoneInbound color='#0275d8' size={25} />     +2349055268682 </p>
              <p style={{ fontSize: '18px' }}><VscMail color='#0275d8' size={30} />     Orheroonome@gmail.com </p>
              <br />
              <div>
                <li><a href='https://github.com/Onome15'  target="_blank" rel="noopener noreferrer"><AiFillGithub color='#0275d8' size={50} className='px-3' /></a> </li>
                <li> <a href='https://www.linkedin.com/in/orhero-onome-463783217/' target="_blank" rel="noopener noreferrer"><RiLinkedinBoxFill color='#0275d8' size={55} className='px-3' /></a></li>
                <li><a href='https://twitter.com/Orheroonome' target="_blank" rel="noopener noreferrer"><TiSocialTwitter color='#0275d8' size={70} className='px-4' /></a></li>
                <li><a href='https://www.facebook.com/profile.php?id=100070104341422' target="_blank" rel="noopener noreferrer"><FaFacebookF color='#0275d8' size={35} className='ps-4' /></a></li>
              </div>
              <br /><br />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='m-2' style={{ textAlign: 'center' }}>
        ©All Rights Reserved
        <br />
        Designed by <span style={{ fontWeight: 'bold' }}>Orhero Joe Onome</span>
      </div>
    </div>

  )
}

export default Contact