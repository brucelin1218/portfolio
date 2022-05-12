import React from 'react';
import './Footer.css'


import SocialLinks from '../../components/links/SocialLinks';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div>@ 2022 VICTORIA RAYNER. ALL RIGHT RESERVED</div>
            <SocialLinks/>
        </div>
    );
};

export default Footer;
