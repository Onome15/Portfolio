import React from 'react';
import './home.css';
import Typed from 'typed.js';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import About from "./about";
import Portfolio from "./Portfolio";
import Contact from "./contact";

const Home = () => {
  const el = React.useRef(null);
  //Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Front-end Developer',
        'Reactjs Developer',
        'Web Designer.'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };
    //elRef refers to the < span > rendered below
    typed.current = new Typed(el.current, options);

  }, [])

  return (
      <div id='#' >
      <div>
        <div className='image'> </div>
        <div className="overlay">
          <div className='bo'>
            <h1 className='text'> Hi, </h1>
            <h2 className='text'>I am Joe.</h2>
            <span style={{ textAlign: 'center' }} ref={el} className='typed'/>
          </div>
          <div className='arrowDown'>
            <HiOutlineChevronDoubleDown color='#0275d8' size={70} />
          </div>
        </div>
      </div>
      <About />
          <Portfolio />
          <Contact />
      </div>
    
  )
}

export default Home