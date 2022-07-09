import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { ImMenu3 } from "react-icons/im";
import { CgCloseR } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { BsMoon } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { HashLink as Lin } from 'react-router-hash-link';


const App = (props) => {
  const joesno = 'Joe';
  const [expanded, setExpanded] = useState(false);
  const [cancel, setCancel] = useState(false);
  const toggle = () => setCancel(!cancel);
  const hide = () => setCancel(false);
  const [mode, setMode] = useState(false);
  if (mode === true) {
console.log('hello world');
    
  }

  return (
    <BrowserRouter>
      <div className='nav' >
        <Navbar collapseOnSelect expanded={expanded} fixed='top' bg='white' expand="md">
          <Container>
            <Navbar.Brand as={Lin} smooth to='/#' id='brand' onClick={() => { setExpanded(false); toggle(); hide() }}> {joesno} </Navbar.Brand>
            <Navbar.Toggle onClick={() => {
              setExpanded(expanded ? false : true);
              toggle()
            }} aria-controls="responsive-navbar-nav">
              {cancel ? <CgCloseR color='hsla(220, 100%, 60%, 1)' size={40} /> : <ImMenu3 color='hsla(220, 100%, 60%, 1)' size={40} />} </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav onClick={() => { setExpanded(false); toggle(); hide() }}>
                <span className='linke linkz'>
                  <Nav.Link as={Lin} smooth to='/#about' id='font'>About </Nav.Link>
                </span>
                <span className='linke linkz'>
                  <Nav.Link as={Lin} smooth to='/#portfolio' id='font'>Portfolio </Nav.Link>
                </span>
                <span className='linke linkz'>
                  <Nav.Link as={Lin} smooth to='/#contact'  id='font'>Contact </Nav.Link>
                </span>
                <span className='linke linkz'>
                  <Nav.Link as={Link} to='/blog' id='font'>Blog </Nav.Link>
                </span>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Lin smooth to="#">
            <span className='arrowup'>
              <IoIosArrowUp size={35} />
            </span>
          </Lin>
          <span className='mode' onClick={() => setMode(mode ? false : true)}>
            {mode  ? <BsMoon size={32}/> :  <BsMoonFill color='black' size={32}  />}
          </span>
        </div>
        {/* <div>
        <Home />
          <About />
          <Portfolio />
         <Contact />
        </div> */}
        <div onClick={() => { setExpanded(false); toggle(); hide() }}>
        {/*  <Routes>
           
            <Route path="contact" element={<Contact />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            {/* <Route render={() => <Navigate to="/" />} /> */}
             {/* <Route path='about' element={<About />} />
           
            <Route path='portfolio' element={<Portfolio />} />
           
             <Route path="contact" element={<Contact />} /> */}
          </Routes>

          {/* <span className='linke'>
      <Nav.Link as ={Link} to ='/' id='font'>Home </Nav.Link>
      </span> */}
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App