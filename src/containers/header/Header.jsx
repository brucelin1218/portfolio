import React from 'react';
import './Header.css'
import '../../App.css'
import SocialLinks from '../../components/links/SocialLinks';

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
                    <button className='header_button' >Projects</button>
                </div>
                <div className='header_links'>
                    <SocialLinks />
                </div>
            </div>

        </div>

            );
};

export default Header;
