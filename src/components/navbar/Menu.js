import React from 'react';
import './navbar.css'
const Scroll = require('react-scroll');
const Link = Scroll.Link;
const Menu = () => {
    return (
        <>
            <p> <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                About
            </Link></p>
            <p>  <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                Skills
            </Link></p>
            <p> <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                Projects
            </Link></p>
            <p>  <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
                Contacts
            </Link> </p>
        </>
    );
};

export default Menu;
