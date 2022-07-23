import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { ImMenu3 } from "react-icons/im";
import { CgCloseR } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import { HashLink as Lin } from 'react-router-hash-link';

const Menu = [
  { to: "/#about", title: "About", },
  { to: "/#portfolio", title: "Portfolio", },
  { to: "/#contact", title: "Contact",  },
  { to: "/blog", title: "Blog",  },
]

const App = (props) => {
  const joesno = 'JoeTechOn';
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
                {Menu.map((menu, index) => {
                  return(
                    <span className='linke linkz' key={index}>
                    <Nav.Link as={Lin} smooth to={menu.to} id='font'>{menu.title}</Nav.Link>
                  </span>
                  )
                })}
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
        </div>
        <div onClick={() => { setExpanded(false); toggle(); hide() }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App