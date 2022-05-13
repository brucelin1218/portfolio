import React from 'react';
import './Header.css'
import '../../App.css'
import SocialLinks from '../../components/links/SocialLinks';
import {Link} from 'react-router-dom';

const Header = () => {
    return (

        <div className='header'>

            <div className='text'>
                <h1 className='slide-left'>Victoria Rayner, <span>Software Engineer</span></h1>
                <div className="container">
                    <h1 className="text" data-text="Welcome to my Portfolio">Welcome to my Portfolio</h1>
                </div>

                <p>
                    Fullstack Web Developer
                    With a passion for Functional and Beautiful Design.
                </p>
                <div className='header_btn'>

                    <button className='header_button' >
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>
                        Projects
                    </Link></button>
                </div>
                <div className='header_links'>
                    <SocialLinks />
                </div>
            </div>

        </div>

            );
};

export default Header;
