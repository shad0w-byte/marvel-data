import React  from 'react'

import {Navbar,Nav,NavDropdown} from 'react-bootstrap'


import {NavbarStyle,BarStyle} from './style'

import Img from '../../patterns/img'


export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
                <Img src="/marvelLogo.svg" alt="marvel logo" width="100px" height="50px" padding="5px"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button" onClick={changeNavbarIcon}>
              <BarStyle>
                <i className="bi bi-list icon"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/"  rel="noreferrer">Home</Nav.Link>
                <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search-character">Characters</NavDropdown.Item>
              <NavDropdown.Item href="/search-event">
                Events
              </NavDropdown.Item>
              <NavDropdown.Item href="/search-comics">Comics</NavDropdown.Item>
              <NavDropdown.Item href="/search-series">Series</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://ssik824.vercel.app/" rel="noreferrer">Creator</Nav.Link>
            <Nav.Link href="https://ssik824.vercel.app/" rel="noreferrer">Old Version </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}

function changeNavbarIcon() {
    let iconButton = document.querySelector(".icon")

   if(iconButton.classList.contains("bi-list")){
        iconButton.classList.remove("bi-list")
        iconButton.classList.add("bi-x")
   }else{
    iconButton.classList.add("bi-list")
    iconButton.classList.remove("bi-x")
   }
}