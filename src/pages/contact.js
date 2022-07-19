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

const contact = [
  { info: "You will receive a message swiftly when you contact me with any of the details below." },
  { info: "Orheroonome@gmail.com ", logo: <GoLocation color='#0275d8' size={30} /> },
  { info: " +2349055268682", logo: <BsTelephoneInbound color='#0275d8' size={25} /> },
  { info: " Delta State, Nigeria", logo: <VscMail color='#0275d8' size={30} /> },
]

const links = [
  { href: 'https://github.com/Onome15', logo: <AiFillGithub color='#0275d8' size={50} className='px-3' /> },
  { href: 'https://www.linkedin.com/in/orhero-onome-463783217/', logo: <RiLinkedinBoxFill color='#0275d8' size={55} className='px-3' /> },
  { href: 'https://twitter.com/Orheroonome', logo: <TiSocialTwitter color='#0275d8' size={70} className='px-4' /> },
  { href: 'https://www.facebook.com/profile.php?id=100070104341422', logo: <FaFacebookF color='#0275d8' size={35} className='ps-4' /> },
]

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
              {contact.map((contact, index) => {
                return (
                  <p style={{ fontSize: '18px' }} key={index}>
                    {contact.logo}
                    <span> {contact.info}</span>
                  </p>
                )
              })}
              <br />
              <div>
                {links.map((links, index) => {
                  return (
                    <li key={index}>
                      <a href={links.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}> {links.logo} </a>
                    </li>
                  )
                })}
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